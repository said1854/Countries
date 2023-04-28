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
    console.log(e.target.value);
    // const selectValue = e.target.value.toLowerCase();
    setOrderByPopulation(false);
    setOrderByArea(false);
    if (e.target.value == "all") {
      setShownCountries(initialCountry);
    } else if (e.target.value !== "") {
      const newArray = initialCountry.filter((country) => {
        return (
          country.continents[0].toLowerCase() == e.target.value.toLowerCase()
        );
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
    setOrderByPopulation(!orderByPopulation);
  };

  const handleOrderByArea = () => {
    console.log("handle order by area triggered!");
    const areaSort = shownCountries.sort((a, b) => {
      let fa = a.area;
      let fb = b.area;
      console.log(fa, fb);
      if (fa > fb) {
        return -1;
      } else if (fa < fb) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(orderByArea);
    setOrderByArea(!orderByArea);
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
        handleOrderByArea={handleOrderByArea}
      />
      <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark mt-8 rounded">
        {isLoaded ? (
          shownCountries.map((country, index) => {
            return (
              <CountryCard
                country={country}
                index={index}
                key={index}
                orderByPopulation={orderByPopulation}
                orderByArea={orderByArea}
              />
            );
          })
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </div>
    </>
  );
};

export default AppCopy;
