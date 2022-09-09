import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ActorMain from "../components/ActorPage/ActorMain";
import soloActorFetch from "../fetches/soloActorFetch";

const ActorPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState([]);
  const [dark, setDark] = useState("");
  useEffect(() => {
    soloActorFetch(id).then((response) => {
      return setActor(response);
    });
  }, [id]);

  const darkModeHandler = (isDark) => {
    setDark(isDark);
  };
  return (
    <div>
      <Header darkMode={darkModeHandler} />
      <ActorMain dark={dark} items={actor} id={id} />
    </div>
  );
};

export default ActorPage;
