import MovieCreditCard from "./MovieCreditCard";
import { useEffect, useState } from "react";
import soloActorCreditsFetch from "../../services/soloActorCreditsFetch";
import "./ActorCreditsList.css";

const ActorCreditsList = (props) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    soloActorCreditsFetch(props.id).then((response) => {
      return setCredits(response.crew);
    });
  }, [props]);
  return (
    <ul className={"actor-credits-list " + props.className}>
      {credits.map((movie) => {
        return (
          <MovieCreditCard
            dark={props.dark}
            item={movie}
            key={movie.id + Math.random()}
          />
        );
      })}
    </ul>
  );
};

export default ActorCreditsList;
