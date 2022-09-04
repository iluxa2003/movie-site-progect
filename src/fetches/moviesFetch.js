


const FetchTrends = (page,type,period) => {

  const trends = fetch(
    `https://api.themoviedb.org/3/trending/${type}/${period}?api_key=f1c9e198351fb99a7484d861b34f1dff&page=${page}`
  ).then((response) => {
    return response.json();
  });
  
    return trends;
};

export default FetchTrends;

