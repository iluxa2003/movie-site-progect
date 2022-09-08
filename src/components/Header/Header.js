import "./Header.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState, useEffect } from "react";
const Header = () => {
  const [dark, setDark] = useState("true");
  useEffect(() => {
    try {
      setDark(localStorage.getItem("dark"));
    } catch {
      localStorage.setItem("dark", true);
    }
  }, []);
  const darkModeHandler = () => {
    if (dark === "true") {
      localStorage.setItem("dark", false);
      setDark(localStorage.getItem("dark"));
    } else {
      localStorage.setItem("dark", true);
      setDark(localStorage.getItem("dark"));
    }
  };

  return (
    <header className={"header" + (dark === "true" ? " dark" : "")}>
      <style>{`body{background-color:${
        dark === "true" ? "#272532" : "#f5f4fa"
      }}`}</style>
      <Search darkMode={dark} />
      <div className={"header__right" + (dark === "true" ? " dark" : "")}>
        <div>
          <button
            className={"dark__mode__button" + (dark === "true" ? " dark" : "")}
            onClick={darkModeHandler}
          >
            {dark === "true" ? " light" : "dark"}
          </button>
        </div>
        <span
          className={"header__home-link" + (dark === "true" ? " dark" : "")}
        >
          <Link to={"../"}>Home</Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
