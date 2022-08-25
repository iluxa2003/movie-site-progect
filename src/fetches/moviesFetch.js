


const FetchTrends = () => {

  const trends = fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=f1c9e198351fb99a7484d861b34f1dff"
  ).then((response) => {
    return response.json();
  });
  


  // const [movies, setMovies] = useState([]);
  
  // const getMovies = async () => {
    //   const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=f1c9e198351fb99a7484d861b34f1dff");
    //   const movies = await response.json();
    //   setMovies(movies);
    // };
    
    // useEffect(() => {
    //   getMovies();
    // }, []);
    
    // return movies.results
    
    return trends;
};

export default FetchTrends;

