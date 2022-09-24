import React, { useState, useEffect } from "react";

import Header from "../components/Header/Header";
import accountFavoriteFetch from "../services/accountFavoriteFetch";
const ProfilePage = (props) => {
  const [accountId, setAccountId] = useState("");
  const [sessionID, setSessionID] = useState("");
  const [dark, setDark] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);
  const [likedTV, setLikedTV] = useState([]);
  useEffect(() => {
    setSessionID(localStorage.getItem("sessionId"));
  }, []);
  useEffect(() => {
    if (sessionID != "" && accountId != "") {
      accountFavoriteFetch(sessionID, accountId, "movies").then((response) => {
        return setLikedMovies(response.results);
      });
      accountFavoriteFetch(sessionID, accountId, "tv").then((response) => {
        return setLikedTV(response.results);
      });
    }
  }, [sessionID, accountId]);
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

export default ProfilePage;
