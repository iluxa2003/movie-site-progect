import FetchTrends from "../fetches/moviesFetch";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MainPage/MovieList";
import Header from "../components/Header/Header"
const MainPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    FetchTrends().then((response) => {
      return setMovies(response.results);
    });
  }, []);
  return (
    <div>
      <Header/>
      <main>
        <MovieList items={movies} />
      </main>
    </div>
  );
};

export default MainPage;