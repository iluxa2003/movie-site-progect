import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import soloMovieFetch from "../services/soloMovieFetch";

import actorsFetch from "../services/actorsFetch";
import Header from "../components/Header/Header";

const MovieDetails = (props) => {
  const [accountId, setAccountId] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);
  const [dark, setDark] = useState("");

  useEffect(() => {
    soloMovieFetch(id).then((response) => {
      return setMovieInfo(response);
    });
  }, [id]);
  const darkModeHandler = (isDark) => {
    setDark(isDark);
  };
  const accountIdHandler = (obj) => {
    setAccountId(obj);
  };
  return (
    <div>
      <Header darkMode={darkModeHandler} accountID={accountIdHandler} />
    </div>
  );
};

export default MovieDetails;
