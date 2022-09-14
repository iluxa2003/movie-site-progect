import FetchTrends from "../services/moviesFetch";
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
  const [year, setYear] = useState("all");
  const [dark, setDark] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([...movies]);
  const [moviesYears, setMoviesYears] = useState([]);
  useEffect(() => {
    FetchTrends(page, mediaType, period).then((response) => {
      setMovies(response.results);
      setPages(response.total_pages);
    });
  }, [page, mediaType, period, year]);
  useEffect(() => {
    if (!moviesYears.includes(year)) {
      setYear("all");
    }
  }, [moviesYears, page, year]);
  useEffect(() => {
    setMoviesYears(
      movies
        .map((item) =>
          new Date(item.release_date || item.first_air_date)
            .getFullYear()
            .toString()
        )
        .filter((item, index, array) => array.indexOf(item) === index)
        .sort()
    );
  }, [movies]);
  useEffect(() => {
    setFilteredMovies(
      movies.filter((item) => {
        if (year !== "all") {
          return (
            new Date(item.release_date || item.first_air_date)
              .getFullYear()
              .toString() === year
          );
        } else {
          return item;
        }
      })
    );
  }, [mediaType, movies, year, period]);
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
    setYear("all");
    setMediaType(event);
  };
  const trendingPeriodHandler = (event) => {
    setYear("all");
    setPeriod(event);
  };
  const yearHandler = (year) => {
    setYear(year);
  };
  const darkModeHandler = (isDark) => {
    setDark(isDark);
  };
  const toStandart = () => {
    setPage(1);
    setMediaType("all");
    setPeriod("day");
  };
  return (
    <div>
      <Header refreshHandler={toStandart} darkMode={darkModeHandler} />
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
          year={[period, mediaType, movies, yearHandler]}
        />
        <MovieList
          dark={dark}
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
