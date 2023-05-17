import { useContext } from "react";
import SiteContext from "../context/SiteContext";

const Footer = () => {
  const { theme, setTheme, language, setLanguage } = useContext(SiteContext);

  return (
    <div className="bg-dark w-full py-2 mt-4 text-center text-white">
      Footer
    </div>
  );
};

export default Footer;
