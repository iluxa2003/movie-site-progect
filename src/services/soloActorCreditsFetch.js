const soloActorCreditsFetch = (param) => {
  const actorCredits = fetch(
    "https://api.themoviedb.org/3/person/" +
      param +
      "/combined_credits?api_key=f1c9e198351fb99a7484d861b34f1dff&language=en-US"
  ).then((response) => {
    return response.json();
  });

  return actorCredits;
};

export default soloActorCreditsFetch;
