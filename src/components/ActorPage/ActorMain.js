import "./ActorMain.css";
import { useEffect, useState } from "react";
import ActorCreditsList from "./ActorCreditsList";
const ActorMain = (props) => {
  const info = props.items;
  const [posterImage, setPosterImage] = useState();
  const [dark, setDark] = useState();
  const [name, setName] = useState();
  const [birthday, setBirthday] = useState();
  const [placeOfBirth, setPlaceOfBirth] = useState();
  const [knownForDepartment, setKnownForDepartment] = useState();
  const [popularity, setPopularity] = useState();
  const [biography, setBiography] = useState();
  useEffect(() => {
    setDark(props.dark);
    setName(info.name);
    setBirthday(info.birthday);
    setPlaceOfBirth(info.place_of_birth);
    setKnownForDepartment(info.known_for_department);
    setPopularity(info.popularity);
    setBiography(info.biography);
    if (info.length !== 0) {
      if (info.profile_path !== null) {
        setPosterImage(
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
            info.profile_path
        );
      } else {
        setPosterImage(
          "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        );
      }
    }
  }, [props, info]);
  return (
    <main className={"actor-main" + (dark === "true" ? " dark" : "")}>
      <div className={"actor-main__wrapper" + (dark === "true" ? " dark" : "")}>
        <section className="actor-main__left">
          <figure
            className={
              "actor-main__left-figure" + (dark === "true" ? " dark" : "")
            }
          >
            <img
              src={posterImage}
              alt="not found"
              className="actor-main__actor-image"
            ></img>
            <figcaption className="actor-main__info">
              <h1
                className={
                  "actor-main__info-title" + (dark === "true" ? " dark" : "")
                }
              >
                Personal information:
              </h1>
              <ul className="actor-main__list">
                <li>
                  <p>Name :</p>
                  <p>
                    {name +
                      (birthday !== null && birthday !== undefined
                        ? " (" + birthday + ")"
                        : " ")}
                  </p>
                </li>

                {placeOfBirth !== null && placeOfBirth !== undefined ? (
                  <li>
                    <p>Was born in:</p>
                    <p>{placeOfBirth}</p>
                  </li>
                ) : (
                  ""
                )}

                {knownForDepartment !== null &&
                knownForDepartment !== undefined ? (
                  <li>
                    <p>Known for:</p>
                    <p>{knownForDepartment}</p>
                  </li>
                ) : (
                  ""
                )}
                {popularity !== null && popularity !== undefined ? (
                  <li>
                    <p>Popularity:</p>
                    <p>{popularity}</p>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="actor-main__right">
          {biography !== null && biography !== undefined && biography !== "" ? (
            <div>
              <h3>Biography</h3>
              <h5>{biography}</h5>
            </div>
          ) : (
            ""
          )}

          <div>
            <ActorCreditsList
              dark={dark}
              id={props.id}
              className="actor-main__credit-list"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ActorMain;
