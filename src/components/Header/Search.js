import { useCallback, useState } from "react";
import "./Search.css";
import FoundList from "./FoundList";
import searchFetch from "../../fetches/searchFetch";
const DEBOUNCE_DELAY = 300;
var debounce = require("lodash.debounce");
const Search = () => {
  const [founded, setFounded] = useState([]);
  const searchHandler = (event) => {
    if (event.target.value != "") {
      searchFetch(event.target.value).then((response) => {
        return setFounded(response.results);
      });
    }
  };
  const handler = useCallback(debounce(searchHandler, DEBOUNCE_DELAY));
  return (
    <form className="search">
      <input className="search__input" onInput={handler} />
      <div className="search__underline"></div>
      <FoundList className="search__found-list" found={founded} />
    </form>
  );
};

export default Search;
