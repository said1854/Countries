import React from "react";
import Header from "../components/Header";
import SiteContext from "../context/SiteContext";
import { useContext } from "react";

const About = () => {
  const theme = useContext(SiteContext);
  return (
    <>
      <Header />
      About Page!
    </>
  );
};

export default About;
