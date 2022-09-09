import "./ActorMain.css";
import { useEffect, useState } from "react";
import ActorCreditsList from "./ActorCreditsList";
const ActorMain = (props) => {
  const info = props.items;
  const [posterImage, setPosterImage] = useState();
  const [dark, setDark] = useState("");
  useEffect(() => {
    setDark(props.dark);
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
                  <p>{info.name + " (" + info.birthday + ")"}</p>
                </li>
                <li>
                  <p>Was born in:</p>
                  <p>{info.place_of_birth}</p>
                </li>
                <li>
                  <p>known_for_department</p>
                  <p>{info.known_for_department}</p>
                </li>
                <li>
                  <p>Popularity:</p>
                  <p>{info.popularity}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </section>
        <section className="actor-main__right">
          <div>
            <h3>Biography</h3>
            <h5>{info.biography}</h5>
          </div>
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
