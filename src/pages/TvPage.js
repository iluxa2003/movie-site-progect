import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import actorsFetch from "../fetches/actorsFetch";
import soloTvFetch from "../fetches/soloTvFetch";
import TvMain from "../components/TvPage/TvMain";
const TvPage = () => {
  const { id } = useParams();

  const [tvInfo, setTvInfo] = useState([]);
  const [actors, setActors] = useState([]);
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
  return (
    <div>
      <Header />
      <main>
        <TvMain info={tvInfo} actors={actors} />
      </main>
    </div>
  );
};

export default TvPage;
