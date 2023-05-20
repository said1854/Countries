import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';

const CountryDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const initDetail = null;
  const [details, setDetails] = useState(initDetail);
  const params = useParams();
  const countryName = params.countryName;

  const fetchData = async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`,
    );
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData(countryName)
      .then((res) => {
        setIsLoaded(true);
        setDetails(res[0]);
        console.debug('res \n', res[0]);
      })
      .catch((e) => {
        setIsLoaded(false);
        setDetails(initDetail);
        console.debug(e.message);
      });
  }, []);

  return (
    <div>
      <Header />
      {details !== initDetail ? (
        <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-light mt-8 rounded-xl dark:border">
          <div className="flex flex-col mx-auto my-4">
            <h1 className="flex flex-row justify-start mb-4">
              {details?.flag} | {details?.name?.official}
            </h1>

            <ul className="flex flex-col mt-4">
              <li>
                <span>Area: </span>
                <span>{details.area}</span>
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
    </div>
  );
};

export default CountryDetails;
