import ActorCard from "./ActorCard";
import "./ActorCardList.css";
import { useEffect, useState } from "react";
const ActorCardList = (props) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    if (props.actors !== undefined) {
      setActors(props.actors);
    }
  }, [props]);

  return (
    <ul className={"actor-card-list " + props.className}>
      {actors.map((actor) => {
        return (
          <ActorCard
            name={actor.original_name || actor.name}
            img={actor.profile_path}
            character={actor.character}
            id={actor.id}
            info={actor}
            key={actor.id}
          />
        );
      })}
    </ul>
  );
};

export default ActorCardList;
