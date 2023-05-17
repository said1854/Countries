import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faToggleOn, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { theme, setTheme, language, setLanguage } = useContext(SiteContext);

  return (
    <header className="bg-dark w-full py-2 flex justify-between">
      <h1 className="">
        <a href="/">Countries</a>
      </h1>
      <div className="text-white flex px-4">
        <p>{theme}</p>
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
        />
      </div>
    </header>
  );
};

export default Header;
