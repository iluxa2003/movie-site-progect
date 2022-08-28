import FetchTrends from "../fetches/moviesFetch";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MainPage/MovieList";
import Header from "../components/Header/Header";
import "./MainPage.css";
const MainPage = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    FetchTrends(page).then((response) => {
      return setMovies(response.results);
    });
  }, [page]);

  const nextHandler = () => {
    setPage((i) => {
      return i + 1;
    });
  };
  const prevHandler = () => {
    setPage((i) => {
      return i - 1;
    });
  };
  return (
    <div>
      <Header />
      <main>
        <div className="pagination-bottons-wrapper">
          <button onClick={prevHandler} className="pagination-botton">
            Previous page
          </button>
          <button onClick={nextHandler} className="pagination-botton">
            Next page
          </button>
        </div>
        <MovieList items={movies} />
      </main>
    </div>
  );
};

export default MainPage;
