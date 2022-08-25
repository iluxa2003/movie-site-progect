import "./Search.css";
import FoundList from "./FoundList";
const Search = () => {
  return (
    <form className="search">
      <input className="search__input" />
      <div className="search__underline"></div>
      <FoundList className="search__found-list" />
    </form>
  );
};

export default Search;
