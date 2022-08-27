import "./ActorMain.css";
import { useEffect, useState } from "react";
const ActorMain = (props) => {
  const info = props.items;
  const [posterImage, setPosterImage] = useState();
  useEffect(() => {
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
  }, [info]);
  return (
    <main>
      <section>
        <figure>
          <img src={posterImage} alt="not found"></img>
          <figcaption>
            <h1>Personal information:</h1>
            <ul>
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
      <section>
        <div>
          <h3>Biography</h3>
          <h5>{info.biography}</h5>
        </div>
      </section>
    </main>
  );
};

export default ActorMain;
