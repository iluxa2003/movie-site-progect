import { useState, useMemo, useEffect } from "react";
import "./Search.css";
import FoundList from "./FoundList";
import searchFetch from "../../fetches/searchFetch";
const DEBOUNCE_DELAY = 300;
const debounce = require("lodash.debounce");
const Search = (props) => {
  const [founded, setFounded] = useState([]);
  const [dark, setDark] = useState("true");
  useEffect(() => {
    setDark(props.darkMode);
  }, [props]);
  const searchHandler = (event) => {
    if (event.target.value !== "") {
      searchFetch(event.target.value).then((response) => {
        return setFounded(response.results);
      });
    }
  };
  const handler = useMemo(
    () =>
      debounce((event) => {
        searchHandler(event);
      }, DEBOUNCE_DELAY),
    []
  );
  return (
    <form className="search">
      <input
        className={"search__input" + (dark === "true" ? " dark" : "")}
        onInput={handler}
      />
      <div className="search__underline"></div>
      <FoundList
        className={"search__found-list" + (dark === "true" ? " dark" : "")}
        found={founded}
      />
    </form>
  );
};

export default Search;
