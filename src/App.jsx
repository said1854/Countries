import { Link, Routes, Route, NavLink } from "react-router-dom";
import SiteContext from "./context/SiteContext";
import Home from "./pages/Home";
import About from "./pages/About";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  return (
    <SiteContext.Provider value="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:countryName" element={<CountryDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </SiteContext.Provider>
  );
};

export default App;
