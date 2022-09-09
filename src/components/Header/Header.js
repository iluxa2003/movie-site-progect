import "./Header.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState, useEffect } from "react";
const Header = (props) => {
  const [dark, setDark] = useState("true");
  useEffect(() => {
    try {
      setDark(localStorage.getItem("dark"));
    } catch {
      localStorage.setItem("dark", true);
    }
  }, [props]);
  useEffect(() => {
    props.darkMode(dark);
  }, [props, dark]);
  const darkModeHandler = () => {
    if (dark === "true") {
      localStorage.setItem("dark", false);
      setDark(localStorage.getItem("dark"));
    } else {
      localStorage.setItem("dark", true);
      setDark(localStorage.getItem("dark"));
    }
  };
  const refresh = () => {
    try {
      props.refreshHandler();
    } catch {}
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
          <Link to={"../"}>
            <button
              className={
                "header__home-link__button" + (dark === "true" ? " dark" : "")
              }
              onClick={refresh}
            >
              Home
            </button>
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
