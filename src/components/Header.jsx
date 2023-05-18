import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faToggleOn,
  faSun,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Icon from "../assets/react.svg";

const Header = () => {
  const { theme, setTheme, language, setLanguage } = useContext(SiteContext);

  return (
    <header className="bg-dark dark:border w-full py-2">
      <div className="flex justify-between w-5/6 mx-auto">
        <div className="text-white my-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about" className="ml-2">
            About
          </NavLink>
        </div>
        <div className="h1">
          <NavLink to="/">Countries</NavLink>
        </div>
        <div className="text-white flex px-4 my-auto">
          {theme == "light" ? (
            <FontAwesomeIcon
              className="mx-4 text-2xl"
              icon={faMoon}
              onClick={() => setTheme("dark")}
            />
          ) : (
            <FontAwesomeIcon
              className="mx-4 text-2xl"
              icon={faSun}
              onClick={() => setTheme("light")}
            />
          )}
          {language === "en" ? (
            <FontAwesomeIcon
              className="text-2xl"
              icon={faToggleOn}
              onClick={() =>
                language == "en" ? setLanguage("tr") : setLanguage("en")
              }
            />
          ) : (
            <FontAwesomeIcon
              className="text-2xl"
              icon={faToggleOff}
              onClick={() =>
                language == "en" ? setLanguage("tr") : setLanguage("en")
              }
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
