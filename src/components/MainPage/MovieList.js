import { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
// import MovieFilter from "./MovieFilter";
const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props]);

  // const [filteredYear, setFilteredYear] = useState("2020");

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

  // const filteredExpenses = items.filter((item) => {
  //   return item.release_date.getFullYear().toString() === filteredYear;
  // });

  return (
    <section>
      <ul className="movie-list">
        {items.map((item) => {
          return <MovieCard item={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default MovieList;
