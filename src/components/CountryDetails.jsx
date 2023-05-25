import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Header from './Header';
import SiteContext from '../context/SiteContext';
import Footer from './Footer';

const CountryDetails = () => {
  const initDetail = null;
  const [refreshPage, setRefreshPage] = useState([]);
  const [details, setDetails] = useState(initDetail);
  const params = useParams();
  const countryName = params.countryName;

  const { shownCountries, theme } = useContext(SiteContext);
  useEffect(() => {
    const [currentCountry] = shownCountries.filter((country) => {
      return countryName == country.name.common;
    });
    setDetails(currentCountry);
  }, []);

  useEffect(() => {
    const initialCountry = localStorage.getItem('initialCountry');
    console.log(initialCountry);
  }, []);

  return (
    <div className="min-h-screen dark:bg-darker">
      <Header />
      {details !== initDetail ? (
        <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-light mt-8 rounded-xl dark:border">
          <div className="flex flex-col mx-auto my-4">
            <h1 className="flex flex-row justify-start mb-4">
              <img src={details?.flags.png} alt={details?.flags.alt} />
              {details?.flag} | {details?.name?.official}
              {}
            </h1>

            <ul className="flex flex-col mt-4">
              <li>
                <span>Area: {details?.area}</span>
              </li>
              <li>
                <span>Capital: {details?.capital} </span>
              </li>
            </ul>

            <h3 className="flex flex-row justify-start mb-4">Language</h3>
            <ul className="flex flex-col mt-4">
              {Object.keys(details?.languages).map((key, idx) => (
                <li key={idx}>
                  <span>
                    {idx + 1}-{key.toLocaleUpperCase()}:{' '}
                  </span>
                  <span>{details?.languages[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-light mt-8 rounded-xl dark:border">
          <p>Loading...</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CountryDetails;
