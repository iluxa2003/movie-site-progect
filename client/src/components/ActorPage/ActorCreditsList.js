import MovieCreditCard from "./MovieCreditCard";
import { useEffect, useState } from "react";
import soloActorCreditsFetch from "../../services/soloActorCreditsFetch";
import "./ActorCreditsList.css";

const ActorCreditsList = (props) => {
  const [creditsCrew, setCreditsCrew] = useState([]);
  const [creditsCast, setCreditsCast] = useState([]);
  useEffect(() => {
    soloActorCreditsFetch(props.id).then((response) => {
      setCreditsCrew(response.crew);
      setCreditsCast(response.cast);
    });
  }, [props.id]);
  return (
    <ul className={"actor-credits-list " + props.className}>
      {creditsCrew.map((movie) => {
        return (
          <MovieCreditCard
            dark={props.dark}
            item={movie}
            key={movie.id + Math.random()}
          />
        );
      })}
      {creditsCast.map((movie) => {
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
