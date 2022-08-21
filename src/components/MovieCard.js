import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <li className="movie-card">
      <figure className="movie-card__figure">
        <img
          className="movie-card__img"
          src={
            "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + props.url
          }
          alt="nothing"
          loading="lazy"
        />
        <figcaption className="movie-card__figcaption">
          <p>{props.name}</p>
        </figcaption>
      </figure>
    </li>
  );
};

export default MovieCard;
