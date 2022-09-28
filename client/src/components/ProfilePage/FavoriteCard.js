import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FavoriteCard.css";
const FavoriteCard = (props) => {
  const [title, setTitle] = useState("");
  const [posterImage, setPosterImage] = useState("");
  const [id, setId] = useState("");
  const [media, setMedia] = useState("");
  const [dark, setDark] = useState("");
  useEffect(() => {
    setDark(props.dark);
    if (props.item !== undefined) {
      setTitle(props.item.name || props.item.title);
      setId(props.item.id);
      setMedia(props.media);
      if (props.item.poster_path !== null) {
        setPosterImage(
          "https://image.tmdb.org/t/p/w138_and_h175_bestv2/" +
            props.item.poster_path
        );
      } else {
        setPosterImage(
          "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        );
      }
    }
  }, [props]);

  return (
    <li className={"favorite-card" + (dark === "true" ? " dark" : "")}>
      <Link to={"../" + media + "/" + id}>
        <figure>
          <img
            className="favorite-card__image"
            src={posterImage}
            alt={posterImage}
          ></img>
          <figcaption
            className={
              "favorite-card__description" + (dark === "true" ? " dark" : "")
            }
          >
            <p>{title}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default FavoriteCard;
