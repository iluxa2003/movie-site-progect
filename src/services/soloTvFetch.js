const soloTvFetch = (param) => {
  const soloTv = fetch(
    "https://api.themoviedb.org/3/tv/" +
      param +
      "?api_key=f1c9e198351fb99a7484d861b34f1dff"
  ).then((response) => {
    return response.json();
  });

  return soloTv;
};

export default soloTvFetch;
