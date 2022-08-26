import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
// import useFetchTrends from "../fetches/moviesFetch";

const MovieList = (props) => {
  return (
    <section>
      <ul className="movie-list">
        {props.items.map((item) => {
          return (
            <MovieCard
              url={item.poster_path}
              name={item.name || item.title}
              type={item.media_type}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default MovieList;
