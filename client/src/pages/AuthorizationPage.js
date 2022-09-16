import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import AuthorizationMain from "../components/AutorizationPage/AuthorizationMain";
const AuthorizationPage = () => {
  const [dark, setDark] = useState("");
  const [sessionId, setDssesionId] = useState("");
  const darkModeHandler = (isDark) => {
    setDark(isDark);
  };
  const ssesionIDHandler = (obj) => {
    setDssesionId(obj);
  };
  useEffect(() => {
    localStorage.setItem("sessionId", sessionId);
  }, [sessionId]);
  return (
    <div>
      <Header darkMode={darkModeHandler} sessionId={sessionId} />
      <AuthorizationMain dark={dark} ssesionIDHandler={ssesionIDHandler} />
    </div>
  );
};
export default AuthorizationPage;
