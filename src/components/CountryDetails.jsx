import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Header from './Header';
import SiteContext from '../context/SiteContext';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const CountryDetails = () => {
  const apiKey = process.env.REACT_APP_STATIC_IMAGE_API_KEY;
  console.log(apiKey);
  const initDetail = null;
  const [refreshPage, setRefreshPage] = useState([]);
  const [details, setDetails] = useState(initDetail);
  const params = useParams();
  const navigate = useNavigate();
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
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-darker">
      <Header />
      <div className="w-5/6 mx-auto">
        <button className="btn w-56 h-12 px-2" onClick={() => navigate('/')}>
          <FontAwesomeIcon className="mr-8 text-2xl" icon={faArrowLeft} />
          {details?.languages === 'en' ? 'Back to Main' : 'Ana Sayfaya Dön'}
        </button>
      </div>
      {details !== initDetail ? (
        <div className="w-5/6 h-5/6 mx-auto text-xl text-darker p-6 container flex flex-wrap bg-light dark:bg-darker dark:text-light rounded-xl dark:border">
          <div className="flex flex-row my-4">
            <div className="flex flex-col m-4 rounded-2xl p-2 border shadow-lg">
              <h1 className="flex flex-row justify-start mb-4">
                {details?.flag} | {details?.name?.official}
              </h1>
              <img
                src={details?.flags.png}
                alt={details?.flags.alt}
                className=""
              />
            </div>
            <ul className="flex flex-col m-4 rounded-2xl p-2 border shadow-lg">
              <li>
                <span className="">Area: {details?.area}</span>
              </li>
              <li>
                <span>Capital: {details?.capital} </span>
              </li>
            </ul>
            <ul className="flex flex-col">
              <h3 className="flex flex-row justify-start m-4">Languages</h3>

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
