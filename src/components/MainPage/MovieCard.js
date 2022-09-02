import { Link } from "react-router-dom";
import "./MovieCard.css";
import { useEffect, useState } from "react";
const MovieCard = (props) => {
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [img, setImg] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    setId(props.item.id);
    setType(props.item.media_type);
    setName(props.item.name || props.item.title);
    if (type === "person") {

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
    }
  }, [props, type]);
  return (
    <Link to={type + "/" + id}>
      <li className="movie-card">
        <figure className="movie-card__figure">
          <img
            className="movie-card__img"
            src={img}
            alt="nothing"
            loading="lazy"
          />
          <figcaption className="movie-card__figcaption">
            <p>{name}</p>
          </figcaption>
        </figure>
      </li>
    </Link>
  );
};

export default MovieCard;
