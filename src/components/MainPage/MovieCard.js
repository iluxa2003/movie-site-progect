import { Link } from "react-router-dom";
import "./MovieCard.css";
import { useEffect, useState } from "react";
const MovieCard = (props) => {
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [dark, setDark] = useState("");

  useEffect(() => {
    setDark(props.dark);
    setId(props.item.id);
    setType(props.item.media_type);
    setName(props.item.name || props.item.title);
    if (props.item.media_type === "person") {
      if (props.item.profile_path !== null) {
        setImg(
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
            props.item.profile_path
        );
      } else {
        setImg(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
        );
      }
    } else {
      if (props.item.poster_path !== null) {
        setImg(
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
            props.item.poster_path
        );
      } else {
        setImg(
          "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        );
      }
      if (props.item.media_type === "tv") {
        setDate(props.item.first_air_date);
      } else if (props.item.media_type === "movie") {
        setDate(props.item.release_date);
      }
    }
  }, [props]);
  return (
    <Link to={type + "/" + id}>
      <li className={"movie-card" + (dark === "true" ? " dark" : "")}>
        <figure
          className={"movie-card__figure" + (dark === "true" ? " dark" : "")}
        >
          <img
            className="movie-card__img"
            src={img}
            alt="nothing"
            loading="lazy"
          />
          <figcaption
            className={
              "movie-card__figcaption" + (dark === "true" ? " dark" : "")
            }
          >
            <p>{name}</p>
            <p>{new Date(date).getFullYear().toString()}</p>
          </figcaption>
        </figure>
      </li>
    </Link>
  );
};

export default MovieCard;
