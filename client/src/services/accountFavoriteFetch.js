const accountFavoriteFetch = (param, account_id, type) => {
  const favorite = fetch(
    " https://api.themoviedb.org/3/account/" +
      account_id +
      "/favorite/" +
      type +
      "?api_key=f1c9e198351fb99a7484d861b34f1dff&language=en-US&session_id=" +
      param +
      "&sort_by=created_at.asc&page=1"
  ).then((response) => {
    return response.json();
  });

  return favorite;
};

export default accountFavoriteFetch;
