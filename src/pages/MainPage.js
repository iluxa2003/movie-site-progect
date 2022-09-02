import FetchTrends from "../fetches/moviesFetch";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MainPage/MovieList";
import Header from "../components/Header/Header";
import Pagination from "../components/MainPage/Pagination";
const MainPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    FetchTrends(page).then((response) => {
      return setMovies(response.results);
    });
    FetchTrends(page).then((response) => {
      return setPages(response.total_pages);
    });
  }, [page]);

  const nextHandler = () => {
    setPage(parseInt(page+1));
  };
  const prevHandler = () => {
    setPage(parseInt(page-1));
  };
  const specialButtonHandler = (event) => {
    setPage(parseInt(event.target.value));
  };
  return (
    <div>
      <Header />
      <main>

        <Pagination handler={specialButtonHandler} next={nextHandler} previous={prevHandler} page={page} pages={pages}/>
        <MovieList items={movies} />
      </main>
    </div>
  );
};

export default MainPage;
