
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MovieDetails from "./pages/MovieDetails";
import MainPage from "./pages/MainPage"
function App() {
  // FetchTrends().then((response) => {
  //   return setMovies(response.results);
  //   // return console.log(response.results);
  // });


  return (
    <Router>
          <Routes>
            <Route path="/movie:id" element={<MovieDetails />} />
            <Route path="" element={<MainPage/>} />
          </Routes>
    </Router>
  );
}

export default App;
