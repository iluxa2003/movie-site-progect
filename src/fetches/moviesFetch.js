


const FetchTrends = (page) => {

  const trends = fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=f1c9e198351fb99a7484d861b34f1dff&page=${page}`
  ).then((response) => {
    return response.json();
  });
  
    return trends;
};

export default FetchTrends;

