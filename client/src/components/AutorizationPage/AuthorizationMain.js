import "./AuthorizationMain.css";
import { useState, useEffect } from "react";
import authorizationTokenFetch from "../../services/authorizationTokenFetch";

const AuthorizationMain = (props) => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [regToken, setRegToken] = useState("");
  const [sessionId, setSessionID] = useState("");
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    authorizationTokenFetch().then((response) => {
      setRegToken(response.request_token);
    });
  }, []);
  useEffect(() => {
    props.ssesionIDHandler(sessionId);
  }, [sessionId, props]);
  const submitBottomHandler = async (event) => {
    event.preventDefault();
    let regToken2 = "";
    const postToAdd = {
      username: userName,
      password: password,
      request_token: regToken,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(postToAdd),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    await fetch(
      "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=f1c9e198351fb99a7484d861b34f1dff",
      options
    )
      .then((response) => response.json())
      .then((post) => {
        regToken2 = post.request_token;
      });

    const secondPostToAdd = {
      request_token: regToken2,
    };

    const secondOptions = {
      method: "POST",
      body: JSON.stringify(secondPostToAdd),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/authentication/session/new?api_key=f1c9e198351fb99a7484d861b34f1dff",
      secondOptions
    )
      .then((response) => response.json())
      .then((post) => {
        setSessionID(post.session_id);
        if (post.success !== false) {
          window.location.assign("./");
        }
      });
  };
  return (
    <main className="authorization-main">
      <form className="authorization-main_form" onSubmit={submitBottomHandler}>
        <h1>Welcome!</h1>
        <div></div>
        <label className="authorization-main_form-labels">
          <div>Name</div>

          <input
            onInput={userNameHandler}
            className="authorization-main_form-inputs"
          />
        </label>
        <label className="authorization-main_form-labels">
          <div>Password</div>
          <input
            onInput={passwordHandler}
            className="authorization-main_form-inputs"
            type="password"
          />
        </label>
        <div className="authorization-main_form-button-wrapper">
          <button className="authorization-main_form-button">Submit</button>
        </div>
      </form>
    </main>
  );
};
export default AuthorizationMain;
