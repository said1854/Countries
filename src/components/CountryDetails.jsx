import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Header from './Header';
import SiteContext from '../context/SiteContext';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = () => {
  const initDetail = null;
  const [refreshPage, setRefreshPage] = useState([]);
  const [details, setDetails] = useState(initDetail);
  const params = useParams();
  const navigate = useNavigate();
  const countryName = params.countryName;
  const { shownCountries, language } = useContext(SiteContext);
  useEffect(() => {
    const [currentCountry] = shownCountries.filter((country) => {
      return countryName == country.name.common;
      console.log(countryName);
    });
    setDetails(currentCountry);
  }, []);
  // useEffect(() => {
  //   const initialCountry = localStorage.getItem('initialCountry');
  // }, []);

  const truncate = (input) =>
    input?.length > 15 ? `${input.substring(0, 15)}...` : input;

  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-darker">
      <Header />
      {details !== initDetail ? (
        <>
          <div className="w-5/6 mx-auto">
            <button
              className="btn w-56 h-12 px-2 my-4"
              onClick={() => navigate('/')}
            >
              <FontAwesomeIcon
                className="mr-8 text-2xl MY"
                icon={faArrowLeft}
              />
              {language === 'en' ? 'Back to Main' : 'Ana Sayfaya Dön'}
            </button>
          </div>
          <div className="w-5/6 mx-auto text-xl text-darker p-6 container flex flex-wrap bg-light dark:bg-darker dark:text-light rounded-xl dark:border">
            <div className="flex flex-row flex-wrap my-4">
              <div className="flex flex-col m-4 p-2 shadow-lg">
                <h1 className="flex flex-row justify-start mb-4">
                  {details?.flag} | {details?.name?.official}
                </h1>
                <img
                  src={details?.flags.png}
                  alt={details?.flags.alt}
                  className=""
                />
                <p>Coat of Arms</p>
                <img src={details?.coatOfArms.png} alt="--" className="w-96" />
              </div>
              <p></p>

              <ul className="flex flex-col m-4 rounded-2xl p-2 border shadow-lg">
                <li>
                  <span className="">Area: {details?.area}</span>
                </li>
                <li>
                  <span>Region: {details?.region} </span>
                </li>
                <li>
                  <span>Sub Region: {details?.subregion} </span>
                </li>
                <li>
                  <span>Capital: {details?.capital} </span>
                </li>
                <li className="flex flex-wrap">
                  <span>
                    {/* Borders: {details?.borders.map((country) => ' ' + country)} */}
                  </span>
                </li>
                <li>
                  <span>
                    Capital lat-lng: {details?.capitalInfo?.latlng[0]}
                    {', '}
                    {details?.capitalInfo.latlng[1]}
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col m-4 rounded-2xl p-2 border shadow-lg">
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
              <ul className="flex flex-col m-4 rounded-2xl p-2 border shadow-lg max-w-lg">
                <h3 className="flex flex-row justify-start m-4">
                  general info
                </h3>

                <li>
                  <span className="truncate block max-w-full line-clamp-3 whitespace-normal">
                    timezones: {details?.timezones}
                  </span>
                </li>
                <li>
                  <span>Start of week: {details?.startOfWeek}</span>
                </li>
                <li>
                  <span>
                    Independent: {details?.independent ? 'True' : 'False'}
                  </span>
                </li>
                <li>
                  <span>Traffic drive : {details?.car.side}</span>
                </li>
                {Object.keys(details?.currencies).map((key, idx) => (
                  <li key={idx}>
                    <span>
                      {'currency: '}
                      {key.toLocaleUpperCase()}
                    </span>
                    <span>{key.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-row m-4 rounded-2xl p-2 border shadow-lg">
                {Object.keys(details?.translations).map((key, idx) => (
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
        </>
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
