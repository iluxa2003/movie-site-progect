import { useState, useEffect } from "react";

const useFetchTrends = () => {
  // const [trends, setTrends] = useState([]);
  // const trends = [];

  const trends = fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=f1c9e198351fb99a7484d861b34f1dff"
  ).then((response) => {
    return response.json();
  });

  // getTrends();
  return trends;
};

export default useFetchTrends;
