import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MovieDetails from "./pages/MovieDetails";
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import ActorPage from "./pages/ActorPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import ProfilePage from "./pages/ProfilePage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3005/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/person/:id" element={<ActorPage />} />
          <Route path="/tv/:id" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="" element={<MainPage />} />
          <Route path="/autorization" element={<AuthorizationPage />} />
          <Route path="/account" element={<ProfilePage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
