import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import soloMovieFetch from "../services/soloMovieFetch";

import actorsFetch from "../services/actorsFetch";
import Header from "../components/Header/Header";
import MovieMain from "../components/MovieDetails/MovieMain";
const MovieDetails = (props) => {
  const { id } = useParams();
  const [accountId, setAccountId] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);
  const [actors, setActors] = useState([]);
  const [dark, setDark] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    actorsFetch(id, "movie").then((response) => {
      return setActors(response.cast);
    });
  }, [id]);

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
  const userNameHandler = (obj) => {
    setUserName(obj);
  };
  return (
    <div>
      <Header
        darkMode={darkModeHandler}
        accountID={accountIdHandler}
        userName={userNameHandler}
      />
      <MovieMain
        dark={dark}
        info={movieInfo}
        actors={actors}
        accountID={accountId}
        userName={userName}
        id={id}
      />
    </div>
  );
};

export default MovieDetails;
