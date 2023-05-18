import { Link, Routes, Route, NavLink } from "react-router-dom";
import SiteContext from "./context/SiteContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  let initialCountry;
  const data = { initialCountry };
  return (
    <SiteContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:countryName" element={<CountryDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </SiteContext.Provider>
  );
};

export default App;
