import { Link } from "react-router-dom";
import "./FoundItem.css";
import { useEffect, useState } from "react";
const FoundItem = (props) => {
  const obj = props.item;
  const noPoster =
    "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
  const [img, setImg] = useState();
  useEffect(() => {
    if (obj.length !== 0) {
      if (obj.media_type === "person") {
        obj.profile_path !== null
          ? setImg(
              "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" +
                obj.profile_path
            )
          : setImg(noPoster);
      } else {
        obj.poster_path !== null
          ? setImg(
              "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" +
                obj.poster_path
            )
          : setImg(noPoster);
      }
    }
  }, [obj]);
  const name = obj.name || obj.title;
  return (
    <li>
      <Link to={"/" + obj.media_type + "/" + obj.id}>
        <figure className="founded-item">
          <img className="founded-item__image" src={img} alt="not found"></img>
          <figcaption className="founded-item__description">
            {obj.media_type + ": " + name}
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default FoundItem;
