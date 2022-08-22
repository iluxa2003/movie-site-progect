import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import soloMovieFetch from "../fetches/soloMovieFetch";
const MovieDetails = (props) => {
  const {id} = useParams();

  const [movieInfo, setMovieInfo] = useState([])
  useEffect(() => {
    soloMovieFetch(id).then((response) => {
      return setMovieInfo(response);
    });
  }, []);
  return (
    <div>
      <p>{id}</p>
      <p>{movieInfo.title||movieInfo.name}</p>
    </div>
  );
};

export default MovieDetails;
