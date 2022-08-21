const MovieCard = (props) => {
  return (
    <li>
      <figure>
        <img
          src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.url}
          alt="nothing"
          loading="lazy"
        />
        <figcaption>
          <p>123</p>
        </figcaption>
      </figure>
    </li>
  );
};

export default MovieCard;
