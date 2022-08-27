import "./MovieCreditCard.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MovieCreditCard = (props) => {
    // https://image.tmdb.org/t/p/w138_and_h175_bestv2/
    const info = props.item;
    const [title, setTitle] = useState();
    const [job, setJob] = useState();
    const [character, setCharacter] = useState();
    const [posterImage, setPosterImage] = useState();
    const [id, setId] = useState();
    const [media, setMedia] = useState();
    useEffect(() => {
      if (info.length !== 0) {
        setJob(info.job)
        setTitle(info.title)
        setCharacter(info.character)
        setId(info.id)
        setMedia(info.media_type)
        if (info.poster_path !== null) {
          setPosterImage(
            "https://image.tmdb.org/t/p/w138_and_h175_bestv2/" +
              info.poster_path
          );
        } else {
          setPosterImage(
            "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
          );
        }
      }
    }, [info]);

  return (
    <li className="movie-credit-card">
      <Link to={"../"+media+"/" + id}>
        <figure>
        <img className="movie-credit-card__image" src={posterImage} alt={posterImage}></img>
          <figcaption className="movie-credit-card__description">
            <p>{title}</p>
            <p>{job}</p>
            <p>{character}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default MovieCreditCard;