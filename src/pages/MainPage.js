import FetchTrends from "../fetches/moviesFetch";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
const MainPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    FetchTrends().then((response) => {
      return setMovies(response.results);
    });
  }, []);
  return (
    <div>
      <header></header>
      <main>
        <MovieList items={movies} />
      </main>
    </div>
  );
};

export default MainPage;