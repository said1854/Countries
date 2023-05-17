import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faToggleOn, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  // const { theme, setTheme, language, setLanguage } = useContext(SiteContext);

  return (
    <header className="bg-dark w-full py-2 flex justify-between">
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav> */}

      <h1 className="">
        <a href="/">Countries</a>
      </h1>
      <div className="text-white flex px-4">
        {/* <p>{theme}</p>
        {theme == "light" ? (
          <FontAwesomeIcon
            className="mx-4"
            icon={faMoon}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <FontAwesomeIcon
            className="mx-4"
            icon={faSun}
            onClick={() => setTheme("light")}
          />
        )}
        <p>{language}</p>
        <FontAwesomeIcon
          icon={faToggleOn}
          onClick={() =>
            language == "en" ? setLanguage("tr") : setLanguage("en")
          }
        /> */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
