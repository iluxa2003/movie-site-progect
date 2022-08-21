import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import useFetchTrends from "./fetches/moviesFetch";
// const DummyData = [];

function App() {
  const [movies, setMovies] = useState([]);
  useFetchTrends().then((response) => {
    return setMovies(response.results);
  });

  return (
    <div>
      <header></header>
      <main>
        <Switch>
          <Route>
            
          </Route>
          <Route>
            
          </Route>
        </Switch>
        <MovieList items={movies} />
      </main>
    </div>
  );
}

export default App;
