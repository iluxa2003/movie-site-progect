import { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, [props]);

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
