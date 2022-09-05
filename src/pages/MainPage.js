import FetchTrends from "../fetches/moviesFetch";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MainPage/MovieList";
import Header from "../components/Header/Header";
import Pagination from "../components/MainPage/Pagination";
import MovieFilter from "../components/MainPage/MovieFilter";
const MainPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const [mediaType, setMediaType] = useState("all");
  const [period, setPeriod] = useState("day");
  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  useEffect(() => {
    FetchTrends(page, mediaType, period).then((response) => {
      return setMovies(response.results);
    });
    FetchTrends(page, mediaType, period).then((response) => {
      return setPages(response.total_pages);
    });
  }, [page, mediaType, period]);

  const nextHandler = () => {
    setPage(parseInt(page + 1));
  };
  const prevHandler = () => {
    setPage(parseInt(page - 1));
  };
  const specialButtonHandler = (event) => {
    setPage(parseInt(event.target.value));
  };
  const mediaTypeHandler = (event) => {
    setMediaType(event);
  };
  const trendingPeriodHandler = (event) => {
    setPeriod(event);
  };
  const yearHandler = (year) => {
    setFilteredMovies(
      movies.filter((item) => {
        return (
          new Date(item.release_date || item.first_air_date)
            .getFullYear()
            .toString() === year
        );
      })
    );
  };
  return (
    <div>
      <Header />
      <main>
        <Pagination
          handler={specialButtonHandler}
          next={nextHandler}
          previous={prevHandler}
          page={page}
          pages={pages}
        />
        <MovieFilter
          media={mediaTypeHandler}
          period={trendingPeriodHandler}
          year={[mediaType, movies, yearHandler]}
        />
        <MovieList
          items={
            mediaType === "tv" || mediaType === "movie"
              ? filteredMovies
              : movies
          }
        />
      </main>
    </div>
  );
};

export default MainPage;
