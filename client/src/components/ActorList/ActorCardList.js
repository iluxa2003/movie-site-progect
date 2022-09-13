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
        return <ActorCard dark={props.dark} info={actor} key={actor.id} />;
      })}
    </ul>
  );
};

export default ActorCardList;
