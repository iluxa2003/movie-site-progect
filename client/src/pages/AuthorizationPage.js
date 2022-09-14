import React, { useState } from "react";
import Header from "../components/Header/Header";
import AuthorizationMain from "../components/AutorizationPage/AuthorizationMain";
const AuthorizationPage = () => {
  const [dark, setDark] = useState("");
  const darkModeHandler = (isDark) => {
    setDark(isDark);
  };
  return (
    <div>
      <Header darkMode={darkModeHandler} />
      <AuthorizationMain dark={dark} />
    </div>
  );
};
export default AuthorizationPage;
