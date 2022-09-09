import React, { useState, useEffect } from "react";
const MovieFilter = (props) => {
  const [periodMain, mediaMain, items, yearHandler] = props.year;
  const [period, setPeriod] = useState();
  const [media, setMedia] = useState();
  const [year, setYear] = useState();
  const [movies, setMovies] = useState([]);
  const [moviesYears, setMoviesYears] = useState([]);
  useEffect(() => {
    setPeriod(periodMain);
    setMedia(mediaMain);
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
  }, [mediaMain, periodMain, items, movies]);

  const yearChangeHandler = (event) => {
    setYear(event.target.value);
    return yearHandler(event.target.value);
  };
  const mediaChangeHandler = (event) => {
    setMedia(event.target.value);
    return props.media(event.target.value);
  };
  const periodChangeHandler = (event) => {
    setPeriod(event.target.value);
    return props.period(event.target.value);
  };
  return (
    <section>
      <div className="movie-filter">
        <select
          onChange={yearChangeHandler}
          disabled={media === "tv" || media === "movie" ? false : true}
          value={year}
          defaultValue={"All"}
        >
          <option value={"all"}>All </option>
          {moviesYears.map((item) => {
            return (
              <option value={item} key={Math.random()}>
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <select onChange={periodChangeHandler} value={period}>
        <option value="day">Today</option>
        <option value="week">This week</option>
      </select>
      <select onChange={mediaChangeHandler} value={media}>
        <option value="all">All</option>
        <option value="person">Actors</option>
        <option value="tv">TV</option>
        <option value="movie">Movies</option>
      </select>
    </section>
  );
};

export default MovieFilter;
