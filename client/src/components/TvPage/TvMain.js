import ActorCardList from "../ActorList/ActorCardList";
import { useState, useEffect } from "react";
import "./TvMain.css";
const TvMain = (props) => {
  const info = props.info;
  const actors = props.actors;
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState();
  const [posterImage, setPosterImage] = useState();
  const [dark, setDark] = useState("");
  const [accountId, setAccountId] = useState("");
  const [id, setId] = useState("");
  const [sessionId, setSessionId] = useState("");
  useEffect(() => {
    if (info.length !== 0) {
      setGenres(info.genres);
      setCompanies(info.production_companies);
      if (info.backdrop_path !== null) {
        setBackgroundImage(
          "url(https://www.themoviedb.org/t/p/w1920_and_h800_bestv2" +
            info.backdrop_path +
            ")"
        );
      }
      if (info.poster_path !== null) {
        setPosterImage(
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
            info.poster_path
        );
      } else {
        setPosterImage(
          "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        );
      }
    }
  }, [info]);
  useEffect(() => {
    setId(props.id);
    setDark(props.dark);
    setAccountId(props.accountID);
    setSessionId(localStorage.getItem("sessionId"));
  }, [props]);
  const favourite = () => {
    const postToAdd = {
      media_type: "tv",
      media_id: id,
      favorite: true,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(postToAdd),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/account/" +
        accountId +
        "/favorite?api_key=f1c9e198351fb99a7484d861b34f1dff&session_id=" +
        sessionId,
      options
    );
  };
  return (
    <main>
      <section
        className="tv-main__bg-image"
        style={{
          backgroundImage: backgroundImage,
        }}
      >
        <div className={"tv-main__wrapper" + (dark === "true" ? " dark" : "")}>
          <figure className="tv-main__figure">
            <img
              className="tv-main__image"
              src={posterImage}
              alt={"not found"}
            ></img>
            <figcaption>
              <h1>
                {info.original_title ||
                  info.name + " (" + info.last_air_date + ")"}
              </h1>
              <span className="tv-main__type">
                {"Tv " +
                  "Seasons: " +
                  info.number_of_seasons +
                  " Episodes: " +
                  info.number_of_episodes}
              </span>

              <span>
                <ul className="tv-main__list">
                  {genres.map((genre) => {
                    return (
                      <li className="tv-main__list-item" key={genre.id}>
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              </span>
              {accountId != "" ? (
                <button onClick={favourite}>Add to favorite</button>
              ) : (
                ""
              )}
              <p className="tv-main__tagline">{info.tagline}</p>
              <h3>Overview:</h3>
              <p>{info.overview}</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section>
        <div className="tv-main__special-info">
          <ActorCardList
            dark={dark}
            actors={actors}
            className="tv-main__actors"
          />
          <div className="tv-main__right-side">
            <ul className="tv-main__right-side-list">
              <li>
                <p>Original language:</p>
                <p>{info.original_language}</p>
              </li>
              <li>
                <p>Popularity:</p>
                <p>{info.popularity}</p>
              </li>
              <li>
                <p>Production companies:</p>
                {companies.map((company) => {
                  return <p key={company.id}>{company.name}</p>;
                })}
              </li>
              <li>
                <p>Budget:</p>
                <p>{info.budget + "$"}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TvMain;
