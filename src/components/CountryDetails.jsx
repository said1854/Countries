import { useParams } from "react-router-dom";
import SiteContext from "../context/SiteContext";
import { useContext } from "react";
import Header from "./Header";

const CountryDetails = () => {
  let data = useContext(SiteContext);
  console.log(data);
  const params = useParams();
  const countrName = params.countryName;
  return (
    <div>
      <Header />
      <p>{countrName}</p>
    </div>
  );
};

export default CountryDetails;
