import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";

const CountryDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [details, setDetails] = useState({});
  const params = useParams();
  const countryName = params.countryName;

  const fetchData = async (country) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData(countryName)
      .then((res) => {
        console.log(res);
        setIsLoaded(true);
        setDetails(res[0]);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  console.log(details);

  return (
    <div>
      <Header />
      {details ? (
        <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-light mt-8 rounded-xl dark:border">
          {countryName}
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
