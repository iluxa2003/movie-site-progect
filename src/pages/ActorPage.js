import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ActorMain from "../components/ActorPage/ActorMain";
import soloActorFetch from "../fetches/soloActorFetch";

const ActorPage = () => {
  const {id} = useParams();
  const [actor, setActor] = useState([]);
  useEffect(() => {
    soloActorFetch(id).then((response) => {
      return setActor(response);
    });
  }, [id]);
  return (
    <div>
      <Header />
      <ActorMain items={actor} id={id}/>
    </div>
  );
};

export default ActorPage;
