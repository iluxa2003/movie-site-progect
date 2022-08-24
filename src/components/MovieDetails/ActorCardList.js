import ActorCard from "./ActorCard";
// import { useEffect, useState } from "react";
// import actorsFetch from "../../fetches/actorsFetch";


const ActorCardList = (props) => {


  return (
    <ul>
      {props.actors.map((actor) => {
        return (
          <ActorCard
            name={actor.original_name || actor.name}
            img={actor.profile_path}
            key={actor.id}
          />
        );
      })}

    </ul>
  );
};

export default ActorCardList;
