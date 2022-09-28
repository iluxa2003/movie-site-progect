import ActorCardList from "../ActorList/ActorCardList";
import { useState, useEffect } from "react";
import "./MovieMain.css";
import CommentsSection from "../CommentsSection/CommentsSection";
const MovieMain = (props) => {
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
      media_type: "movie",
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
        className="movie-main__bg-image"
        style={{
          backgroundImage: backgroundImage,
        }}
      >
        <div
          className={"movie-main__wrapper" + (dark === "true" ? " dark" : "")}
        >
          <figure className="movie-main__figure">
            <img
              className="movie-main__image"
              src={posterImage}
              alt={
                "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
                info.poster_path
              }
            ></img>
            <figcaption>
              <h1>{info.original_title + " (" + info.release_date + ")"}</h1>
              <span className="movie-main__type">Movie</span>
              <span>
                <ul className="movie-main__list">
                  {genres.map((genre) => {
                    return (
                      <li className="movie-main__list-item" key={genre.id}>
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              </span>
              {accountId !== "" ? (
                <button onClick={favourite}>Add to favorite</button>
              ) : (
                ""
              )}

              <p className="movie-main__tagline">{info.tagline}</p>
              <h3>Overview:</h3>
              <p>{info.overview}</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section>
        <div className="movie-main__special-info">
          <ActorCardList
            dark={dark}
            actors={actors}
            className="movie-main__actors"
          />
          <div className="movie-main__right-side">
            <ul className="movie-main__right-side-list">
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
      <CommentsSection userName={props.userName} />
    </main>
  );
};

export default MovieMain;
