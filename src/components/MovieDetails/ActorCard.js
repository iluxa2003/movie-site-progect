const ActorCard = (props) => {
  return <figure>
    <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+props.img}></img>
    <figcaption>
        <p>{props.name}</p>
    </figcaption>
  </figure>;
};

export default ActorCard;