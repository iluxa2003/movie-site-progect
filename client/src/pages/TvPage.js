import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import actorsFetch from "../services/actorsFetch";
import soloTvFetch from "../services/soloTvFetch";
import TvMain from "../components/TvPage/TvMain";
const TvPage = () => {
  const { id } = useParams();

  const [tvInfo, setTvInfo] = useState([]);
  const [actors, setActors] = useState([]);
  const [dark, setDark] = useState("");
  useEffect(() => {
    actorsFetch(id, "tv").then((response) => {
      return setActors(response.cast);
    });
  }, [id]);

  useEffect(() => {
    soloTvFetch(id).then((response) => {
      return setTvInfo(response);
    });
  }, [id]);
  const darkModeHandler = (isDark) => {
    setDark(isDark);
  };
  return (
    <div>
      <Header darkMode={darkModeHandler} />
      <main>
        <TvMain dark={dark} info={tvInfo} actors={actors} />
      </main>
    </div>
  );
};

export default TvPage;
