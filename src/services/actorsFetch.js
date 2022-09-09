const actorsFetch = (param, type) => {
  const actors = fetch(
    `https://api.themoviedb.org/3/${type}/${param}/credits?api_key=f1c9e198351fb99a7484d861b34f1dff&language=en-US&`
  ).then((response) => {
    return response.json();
  });

  return actors;
};

export default actorsFetch;
