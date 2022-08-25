import { Link } from "react-router-dom";
import "./FoundItem.css"
const FoundItem = (props) => {
  const obj = props.item;
    const img = obj.profile_path || obj.poster_path;
    const name =  obj.name || obj.title;
  return (
    <li>
      <Link to={"/" + obj.media_type +"/"+ obj.id}>
        <figure className="founded-item">
          <img className="founded-item__image"
            src={
              "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + img
            }
          ></img>
          <figcaption className="founded-item__description">{obj.media_type +": "+ name}</figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default FoundItem;
