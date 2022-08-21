import React, { useState } from "react";
import MovieList from "./components/MovieList";
import useFetchTrends from "./components/moviesFetch";
// const DummyData = [];

function App() {
  const [movies, setMovies] = useState([]);
  useFetchTrends().then(response => {return setMovies(response.results)})

  return (
    <div>
      <MovieList items={movies} />
    </div>
  );
}

export default App;
