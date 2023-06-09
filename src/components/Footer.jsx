import { useContext } from "react";
import SiteContext from "../context/SiteContext";

const Footer = () => {
  const { isLoaded } = useContext(SiteContext);
  return (
    <div>
      {isLoaded ? (
        <footer className="bg-dark w-full py-2 text-center text-white dark:bg-darker dark:border">
          Created by
          <a
            href="/https://github.com/said1854"
            className="font-bold no-underline"
          >
            Said1854
          </a>
        </footer>
      ) : (
        <footer className="bg-dark w-full py-2 text-center text-white bottom-0 dark:bg-darker dark:border">
          Created by
          <a
            href="/https://github.com/said1854"
            className="font-bold no-underline"
          >
            Said1854
          </a>
        </footer>
      )}
    </div>
  );
};

export default Footer;
