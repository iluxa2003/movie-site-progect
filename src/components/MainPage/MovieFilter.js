import React, { useState, useEffect } from "react";
const MovieFilter = (props) => {
  const [media, items, yearHandler] = props.year;
  const [year, setYear] = useState();
  const [movies, setMovies] = useState([]);
  const [moviesYears, setMoviesYears] = useState([]);
  useEffect(() => {
    setMovies(items);
    setMoviesYears(
      movies
        .map((item) =>
          new Date(item.release_date || item.first_air_date)
            .getFullYear()
            .toString()
        )
        .filter((item, index, array) => array.indexOf(item) === index)
        .sort()
    );
  }, [items, movies]);

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
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
        disabled={media === "tv" || media === "movie" ? false : true}
        value={year}
      >
        {moviesYears.map((item) => {
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
