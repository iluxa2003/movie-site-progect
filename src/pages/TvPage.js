import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import actorsFetch from "../fetches/actorsFetch";
import soloTvFetch from "../fetches/soloTvFetch";
import ActorCardList from "../components/ActorList/ActorCardList";
const TvPage = () =>{
    const { id } = useParams();

    const [tvInfo, setTvInfo] = useState([]);
    const [actors, setActors] = useState([]);
    useEffect(() => {
      actorsFetch(id,"tv").then((response) => {
        return setActors(response.cast);
      });
    }, []);
  
    useEffect(() => {
      soloTvFetch(id).then((response) => {
        return setTvInfo(response);
      });
    }, []);
    return(
        <div>
            <Header/>
            <main>
                <ActorCardList actors={actors} />   
            </main>
        </div>
    );
}

export default TvPage;