import { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [items, setItems] = useState([]);
  const [dark, setDark] = useState("");

  useEffect(() => {
    setDark(props.dark);
    setItems(props.items);
  }, [props]);

  return (
    <section>
      <ul className="movie-list">
        {items.map((item) => {
          return <MovieCard dark={dark} item={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
};

export default MovieList;
