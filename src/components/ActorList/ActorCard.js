import "./ActorCard.css";
import { Link } from "react-router-dom";
const ActorCard = (props) => {
  let image = "";
  if (props.img != null) {
    image = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + props.img;
  } else {
    image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg";
  }

  return (
    <li className="actor-card">
      <Link to={"../person" + "/" + props.id}>
        {/* к ../ сам додумался Xdd  */}
        <figure>
          <img className="actor-card__image" src={image}></img>
          <figcaption className="actor-card__description">
            <p>{props.name}</p>
            <p>{props.character}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ActorCard;
