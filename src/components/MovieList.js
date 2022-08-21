import React from "react";

import MovieCard from "./MovieCard";
import useFetchTrends from "./moviesFetch";

const MovieList = (props) => {
  const creatingElements = (obj) => {
    obj.then((response) =>
      response.results.map((movie) => {
        <p>{movie.poster_path}</p>;
        //  <MovieCard url={movie.poster_path} key={movie.id}/>;
        // console.log(movie.poster_path);
      })
    );
  };

  return (
    <section>
      {props.items.map((item) => {
        return <MovieCard url={item.poster_path} key={item.id} />;
      })}
    </section>
  );
};

export default MovieList;
