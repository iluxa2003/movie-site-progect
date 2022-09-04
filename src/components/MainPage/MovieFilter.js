import React, { useState, useEffect } from "react";
const MovieFilter = (props) => {
  const [media, items, yearHandler] = props.year;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(items);
  }, [items]);
  const moviesYears = [
    movies.map((item) =>
      new Date(item.release_date || item.first_air_date)
        .getFullYear()
        .toString()
    ),
  ];
  const yearChangeHandler = (event) => {
    return yearHandler(event.target.value);
  };
  const mediaChangeHandler = (event) => {
    return props.media(event.target.value);
  };
  const periodChangeHandler = (event) => {
    return props.period(event.target.value);
  };
  return (
    <section>
      <select
        onChange={yearChangeHandler}
        disabled={media === "tv" || media === "movies" ? false : true}
      >
        {moviesYears[0].map((item) => {
          return (
            <option value={item} key={Math.random()}>
              {item}
            </option>
          );
        })}
      </select>

      <select onChange={periodChangeHandler}>
        <option value="day">Today</option>
        <option value="week">This week</option>
      </select>
      <select onChange={mediaChangeHandler}>
        <option value="all">all</option>
        <option value="person">actors</option>
        <option value="tv">Tv</option>
        <option value="movie">Movies</option>
      </select>
    </section>
  );
};

export default MovieFilter;
