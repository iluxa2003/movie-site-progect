import ActorCard from "./ActorCard";
// import { useEffect, useState } from "react";
// import actorsFetch from "../../fetches/actorsFetch";
import './ActorCardList.css'

const ActorCardList = (props) => {


  return (
    <ul className={"actor-card-list "+props.className}>
      {props.actors.map((actor) => {
        return (
          <ActorCard
            name={actor.original_name || actor.name}
            img={actor.profile_path}
            character={actor.character}
            id={actor.id}
            key={actor.id}
          />
        );
      })}

    </ul>
  );
};

export default ActorCardList;
