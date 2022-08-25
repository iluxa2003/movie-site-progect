const searchFetch = (param) => {
    const search = fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=f1c9e198351fb99a7484d861b34f1dff&language=en-US&query=${param}&page=1`
    )
      .then((response) => {
        return response.json();
      })

  
    return search;
  };
  
  export default searchFetch;
  