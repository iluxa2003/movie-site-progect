import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import soloMovieFetch from "../fetches/soloMovieFetch";
import ActorCardList from "../components/MovieDetails/ActorCardList";

import actorsFetch from "../fetches/actorsFetch";
const MovieDetails = (props) => {
  const {id} = useParams();

  const [movieInfo, setMovieInfo] = useState([])
  const [actors, setActors] = useState([]);
  useEffect(() => {
    actorsFetch(id).then((response) => {
      return setActors(response.cast);
    });
  }, []);

  useEffect(() => {
    soloMovieFetch(id).then((response) => {
      return setMovieInfo(response);
    });
  }, []);


  return (
    <div>
      <p>{id}</p>
      <p>{movieInfo.title||movieInfo.name}</p>
      <ActorCardList actors={actors}/>
    </div>
  );
};

export default MovieDetails;
