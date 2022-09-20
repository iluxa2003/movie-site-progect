import "./Header.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useState, useEffect } from "react";
import accountIdFetch from "../../services/accountIdFetch";
const Header = (props) => {
  const [dark, setDark] = useState("true");
  const [sessionId, setSessionID] = useState("");
  const [username, setUsername] = useState("");
  const [accountId, setAccountId] = useState("");
  useEffect(() => {
    try {
      setSessionID(localStorage.getItem("sessionId"));
    } catch {}
    try {
      setDark(localStorage.getItem("dark"));
    } catch {
      localStorage.setItem("dark", true);
    }
  }, [props]);
  useEffect(() => {
    props.darkMode(dark);
  }, [props, dark]);
  useEffect(() => {
    if (sessionId.length !== 0) {
      accountIdFetch(sessionId).then((response) => {
        setAccountId(response.id);
        setUsername(response.username);
      });
    }
  }, [sessionId]);
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
  const logOutHandler = () => {
    localStorage.setItem("sessionId", "");
    setSessionID("");
    setUsername("");
    setAccountId("");
  };

  try {
    const accountIdHandler = () => {
      props.accountID(accountId);
    };
  } catch {}
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
        {sessionId.length !== 0 ? (
          <span>
            <div>{username}</div>
          </span>
        ) : (
          ""
        )}
        {sessionId.length !== 0 ? (
          <button onClick={logOutHandler}>Log Out</button>
        ) : (
          <Link to={"../autorization"}>
            <button>Log In</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
