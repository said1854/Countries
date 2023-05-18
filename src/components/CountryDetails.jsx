import { useParams } from "react-router-dom";
import SiteContext from "../context/SiteContext";
import { useContext } from "react";

const CountryDetails = () => {
  const { initialCountry } = useContext(SiteContext);
  console.log(initialCountry);
  const params = useParams();
  const countrName = params.countryName;
  return (
    <div>
      <p>{countrName}</p>
      {/* <p>{shownCountries}</p> */}
    </div>
  );
};

export default CountryDetails;
