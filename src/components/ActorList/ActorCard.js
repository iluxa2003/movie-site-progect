import "./ActorCard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const ActorCard = (props) => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [character, setCharacter] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    if (props.info !== undefined) {
      setName(props.info.name);
      setCharacter(props.info.character);
      setId(props.info.id);
      if (props.info.profile_path != null) {
        setImage(
          "https://image.tmdb.org/t/p/w138_and_h175_bestv2/" +
            props.info.profile_path
        );
      } else {
        setImage(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
        );
      }
    }
  }, [props]);

  return (
    <li className="actor-card">
      <Link to={"../person/" + id}>
        <figure>
          <img className="actor-card__image" src={image} alt={image}></img>
          <figcaption className="actor-card__description">
            <p>{name}</p>
            <p>{character}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ActorCard;
