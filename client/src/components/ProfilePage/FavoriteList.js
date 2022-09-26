import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";
import "./FavoriteList.css";
const FavoriteList = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [dark, setDark] = useState("");
  useEffect(() => {
    setDark(props.dark);
    if (props.info !== undefined) {
      setFavorite(props.info);
    }
  }, [props]);

  return (
    <div>
      <h3 className={"favorite-list-title " + (dark === "true" ? " dark" : "")}>
        {props.list_title}
      </h3>
      <ul className={"favorite-list " + props.className}>
        {favorite.map((film) => {
          return (
            <FavoriteCard
              dark={props.dark}
              item={film}
              key={film.id}
              media={props.media}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteList;
