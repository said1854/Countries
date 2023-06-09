import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import { Link } from "react-router-dom";

const CountryCard = ({ country, index }) => {
  const { language, orderByArea, orderByPopulation } = useContext(SiteContext);
  return (
    <div className="w-56 mx-auto my-4 bg-light dark:bg-darker dark:text-light dark:border rounded-xl font-dark font-mono">
      <img
        className="h-36 w-full rounded-t-xl"
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <div className="text-sm p-2 flex flex-col justify-">
        <div className="text-xl font-serif flex">
          {orderByArea && !orderByPopulation ? <h4>{index + 1} -</h4> : <></>}
          {orderByPopulation && !orderByArea ? <h4>{index + 1} -</h4> : <></>}
          {country.name.common}
        </div>
        <div className="flex flex-col justify-between">
          {orderByPopulation ? (
            <p className="underline">
              {language === 'en' ? 'Population' : 'Nüfus'}:
              {country.population.toLocaleString()}
            </p>
          ) : (
            <p>
              {language === 'en' ? 'Population' : 'Nüfus'}:
              {country.population.toLocaleString()}
            </p>
          )}
          {orderByArea ? (
            <p className="underline">
              {language === 'en' ? 'Area' : 'Yüzölçümü'}:
              {country.area.toLocaleString()} km2
            </p>
          ) : (
            <p>
              {language === 'en' ? 'Area' : 'Yüzölçümü'}:
              {country.area.toLocaleString()} km2
            </p>
          )}
          <p>
            {language === 'en' ? 'Capital' : 'Başkent'}:{country.capital}
          </p>
          <p>
            <span className="bold">
              {language === 'en' ? 'Continent' : 'Kıtası'}:
            </span>
            {country.continents}
          </p>
        </div>
        <div className="justify-self-end">
          <Link to={`/countries/${country.name.common}`}>
            <div className="btn px-4">
              {language === 'en' ? 'View Details' : 'Detaylar'}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
