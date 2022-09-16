const accountIdFetch = (param) => {
  const account = fetch(
    "https://api.themoviedb.org/3/account" +
      "?api_key=f1c9e198351fb99a7484d861b34f1dff&session_id=" +
      param
  ).then((response) => {
    return response.json();
  });

  return account;
};

export default accountIdFetch;
