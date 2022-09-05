import "./Header.css";
import { Link } from "react-router-dom";
import Search from "./Search";
const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header__right">
        <div></div>
        <span className="header__home-link">
          <Link to={"../"}>Home</Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
