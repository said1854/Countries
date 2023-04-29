import { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import Topbar from "./components/Topbar";

const App = () => {
  const [initialCountry, setInitialCountry] = useState([]);
  const [shownCountries, setShownCountries] = useState(initialCountry);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [orderByPopulation, setOrderByPopulation] = useState(false);
  const [orderByArea, setOrderByArea] = useState(false);
  const [sortbyContinent, setSortByContinent] = useState(false);
  console.log(orderByArea);
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
    setOrderByPopulation(false);
    setOrderByArea(false);
    if (e.target.value == "all") {
      setShownCountries(initialCountry);
      setSortByContinent(false);
    } else if (e.target.value !== "") {
      const newArray = initialCountry.filter((country) => {
        return (
          country.continents[0].toLowerCase() == e.target.value.toLowerCase()
        );
      });
      setShownCountries(newArray);
      setSortByContinent(true);
    }
  };

  const handleOrderByPopulation = () => {
    const populationSort = shownCountries.sort((a, b) => {
      let fa = a.population;
      let fb = b.population;
      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });
    setOrderByArea(false);
    setShownCountries(populationSort);
    setOrderByPopulation(!orderByPopulation);
  };

  const handleOrderByArea = () => {
    const areaSort = shownCountries.sort((a, b) => {
      let fa = a.area;
      let fb = b.area;
      if (fa > fb) {
        return -1;
      } else if (fa < fb) {
        return 1;
      } else {
        return 0;
      }
    });
    setOrderByPopulation(false);
    setShownCountries(areaSort);
    setOrderByArea(!orderByArea);
  };

  return (
    <>
      <Header />
      <Topbar
        orderByPopulation={orderByPopulation}
        selectValue={selectValue}
        handleOrderByArea={handleOrderByArea}
        handleContinentSelect={handleContinentSelect}
        handleOrderByPopulation={handleOrderByPopulation}
        orderByArea={orderByArea}
      />
      <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark mt-8 rounded">
        {isLoaded ? (
          shownCountries.map((country, index) => {
            return (
              <CountryCard
                country={country}
                index={index}
                key={index}
                sortbyContinent={sortbyContinent}
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

// const App = () => {
//   return (
//     <Router>
//       <Route exact path="/" component={HomePage} />
//     </Router>
//   );
// };

export default App;
