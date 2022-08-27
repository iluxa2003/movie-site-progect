import FetchTrends from "../fetches/moviesFetch";
import React, { useState, useEffect } from "react";
import MovieList from "../components/MainPage/MovieList";
import Header from "../components/Header/Header"
const MainPage = () => {

  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    FetchTrends(page).then((response) => {
      return setMovies(response.results);
    });
  },[page]);

  const nextHandler =()=>{
    setPage(i=>{return i+1});
  }
  const prevHandler =()=>{
    setPage(i=>{return i-1});
  }
  return (
    <div>
      <Header/>
      <main>
      <button onClick={prevHandler}>Previous page</button>
        <button onClick={nextHandler}>Next page</button>
        <MovieList items={movies} />
      </main>
    </div>
  );
};

export default MainPage;