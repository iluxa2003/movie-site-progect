import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import soloMovieFetch from "../fetches/soloMovieFetch";

import actorsFetch from "../fetches/actorsFetch";
import Header from "../components/Header/Header";
import MovieMain from "../components/MovieDetails/MovieMain";
const MovieDetails = (props) => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);
  const [actors, setActors] = useState([]);
  useEffect(() => {
    actorsFetch(id,"movie").then((response) => {
      return setActors(response.cast);
    });
  });

  useEffect(() => {
    soloMovieFetch(id).then((response) => {
      return setMovieInfo(response);
    });
  });

  return (
    <div>
      <Header />
      
        {/* <p>{id}</p>
        <p>{movieInfo.title || movieInfo.name}</p>
        <ActorCardList actors={actors} /> */}
        <MovieMain info={movieInfo} actors={actors}/>

    </div>
  );
};

export default MovieDetails;
