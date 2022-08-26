import ActorCardList from "../ActorList/ActorCardList";
// import { useState, useEffect } from "react";
import "./TvMain.css";
const TvMain = (props) => {
  const info = props.info;

  const actors = props.actors;
  //   const genres = info.genres;
  //   const companies = info.companies;

  return (
    <main>
      <section
        className="tv-main__bg-image"
        style={{
          backgroundImage: `${
            "url(https://www.themoviedb.org/t/p/w1920_and_h800_bestv2" +
            info.backdrop_path +
            ")"
          }`,
        }}
      >
        <div className="tv-main__wrapper">
          <figure className="tv-main__figure">
            <img
              className="tv-main__image"
              src={
                "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
                info.poster_path
              }
              alt={
                "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
                info.poster_path
              }
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
                  {/* {
                  genres.map((genre) => {
                    return (
                      <li className="tv-main__list-item" >{genre.name}</li>
                    );
                  })} */}
                  {/* {console.log(genres)} */}
                </ul>
              </span>
              <p className="tv-main__tagline">{info.tagline}</p>
              <h3>Overview:</h3>
              <p>{info.overview}</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section>
        <div className="tv-main__special-info">
          <ActorCardList actors={actors} className="tv-main__actors" />
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
              {/* <li>
                <p>Production companies:</p>
                {companies.map((company) => {
                  return <p>{company.name}</p>;
                })}
              </li> */}
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
