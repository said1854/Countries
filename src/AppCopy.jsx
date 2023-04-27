import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import Topbar from "./components/Topbar";

const AppCopy = () => {
  const [initialCountry, setInitialCountry] = useState([]);
  const [shownCountries, setShownCountries] = useState(initialCountry);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [orderByPopulation, setOrderByPopulation] = useState(false);
  const [orderByArea, setOrderByArea] = useState(false);
  const [sortbyContinent, setSortByContinent] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        const sortedRes = res.sort((a, b) => {
          let fa = a.name.common.toLowerCase();
          let fb = b.name.common.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        console.log(sortedRes);
        setInitialCountry(sortedRes);
        setShownCountries(sortedRes);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleContinentSelect = (e) => {
    setSelectValue(e.target.value);
    const continent = e.target.value.toLowerCase();
    setOrderByPopulation(false);
    setOrderByArea(false);
    if (continent == "all") {
      setCountry(initialCountry);
    } else if (continent !== "") {
      const newArray = initialCountry.filter((country) => {
        return country.continents[0].toLowerCase.includes(continent);
      });
      setShownCountries(newArray);
    }
  };

  const handleOrderByPopulation = () => {
    const populationSort = shownCountries.sort((a, b) => {
      let fa = a.population;
      let fb = b.population;
      // console.log(typeof fa, fb);
      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });

    setOrder(true);
    setOrderByPopulation(!orderByPopulation);
    setCountry(populationSort);
    console.log(populationSort);
  };

  return (
    <>
      <Header />
      <Topbar
        orderByPopulation={orderByPopulation}
        orderByArea={orderByArea}
        sortbyContinent={sortbyContinent}
        handleContinentSelect={handleContinentSelect}
        selectValue={selectValue}
        handleOrderByPopulation={handleOrderByPopulation}
      />
      <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark mt-8 rounded">
        {isLoaded ? (
          shownCountries.map((country, index) => {
            return <CountryCard country={country} index={index} key={index} />;
          })
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </div>
    </>
  );
};

export default AppCopy;
