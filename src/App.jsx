import { useEffect, useState } from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import Topbar from "./components/Topbar";
import NatoMembers from "./components/nato.json";
import SiteContext from "./context/SiteContext";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
