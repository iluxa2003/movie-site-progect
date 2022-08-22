import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const params = useParams();
  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
};

export default MovieDetails;
