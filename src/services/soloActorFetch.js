const soloActorFetch = (param) => {
  const soloActor = fetch(
    "https://api.themoviedb.org/3/person/" +
      param +
      "?api_key=f1c9e198351fb99a7484d861b34f1dff"
  ).then((response) => {
    return response.json();
  });

  return soloActor;
};

export default soloActorFetch;
