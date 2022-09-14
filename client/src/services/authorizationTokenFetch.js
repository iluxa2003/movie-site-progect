const authorizationTokenFetch = () => {
  const token = fetch(
    "https://api.themoviedb.org/3/authentication/token/new?api_key=f1c9e198351fb99a7484d861b34f1dff"
  ).then((response) => {
    return response.json();
  });

  return token;
};

export default authorizationTokenFetch;
