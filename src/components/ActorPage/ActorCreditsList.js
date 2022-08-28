import MovieCreditCard from "./MovieCreditCard";
import { useEffect, useState } from "react";
import soloActorCreditsFetch from "../../fetches/soloActorCreditsFetch";
import "./ActorCreditsList.css";

const ActorCreditsList = (props) => {
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    soloActorCreditsFetch(props.id).then((response) => {
      return setCredits(response.crew);
    });
  }, [props.id]);
  return (
    <ul className={"actor-credits-list " + props.className}>
      {credits.map((movie) => {
        return <MovieCreditCard item={movie} key={movie.id} />;
      })}
    </ul>
  );
};

export default ActorCreditsList;
