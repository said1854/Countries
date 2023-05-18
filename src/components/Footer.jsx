import { useContext } from "react";
import SiteContext from "../context/SiteContext";

const Footer = () => {
  const { isLoaded } = useContext(SiteContext);
  return (
    <div>
      {isLoaded ? (
        <footer className="bg-dark w-full py-2 mt-4 text-center text-white dark:border">
          Footer
        </footer>
      ) : (
        <footer className="bg-dark w-full py-2 mt-4 text-center text-white bottom-0">
          Footer
        </footer>
      )}
    </div>
  );
};

export default Footer;
