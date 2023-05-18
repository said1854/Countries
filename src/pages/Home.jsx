import { useContext, useEffect, useState } from "react";
import SiteContext from "../context/SiteContext";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import CountryCard from "../components/CountryCard";
import NatoMembers from "../data/nato.json";
import Header from "../components/Header";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  let [initialCountry, setInitialCountry] = useState([]);
  const [shownCountries, setShownCountries] = useState(initialCountry);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectValue, setSelectValue] = useState();
  const [orderByPopulation, setOrderByPopulation] = useState(false);
  const [orderByArea, setOrderByArea] = useState(false);
  const [sortbyContinent, setSortByContinent] = useState(false);
  const [unMember, setUnMember] = useState(false);
  const [natoMember, setNatoMember] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    fetchData()
      .then((res) => {
        console.log(res);
        setInitialCountry(res);
        setShownCountries(res);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword == "") {
      setShownCountries(shownCountries);
    } else {
      const newArray = initialCountry.filter((country) =>
        country.name.common.toLowerCase().includes(keyword.toLowerCase())
      );
      setShownCountries(newArray);
    }
  };

  const handleContinentSelect = (e) => {
    setSelectValue(e.target.value);
    setOrderByPopulation(false);
    setOrderByArea(false);
    setNatoMember(false);
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
    setUnMember(false);
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
    setUnMember(false);
    setShownCountries(areaSort);
    setOrderByArea(!orderByArea);
  };

  const handleNatoMemberSort = () => {
    setNatoMember(!natoMember);
    if (!natoMember) {
      const newArray = shownCountries.filter((country) => {
        return NatoMembers.includes(country.name.common);
      });
      setShownCountries(newArray);
    } else {
      setShownCountries(initialCountry);
      setSelectValue("");
    }
    setOrderByArea(false);
    setOrderByPopulation(false);
  };

  const data = {
    theme,
    setTheme,
    language,
    setLanguage,
    orderByArea,
    initialCountry,
    handleOrderByArea,
    natoMember,
    handleNatoMemberSort,
    handleSearch,
    orderByPopulation,
    selectValue,
    handleContinentSelect,
    handleOrderByPopulation,
    orderByArea,
    orderByPopulation,
    isLoaded,
  };

  return (
    <SiteContext.Provider value={data}>
      <div
        className={
          isLoaded
            ? "dark:bg-dark"
            : "flex flex-col min-h-screen justify-between"
        }
      >
        <Header />
        <Topbar />
        <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark mt-8 rounded-xl dark:border">
          {isLoaded ? (
            shownCountries.map((country, index) => {
              return (
                <CountryCard country={country} index={index} key={index} />
              );
            })
          ) : (
            <p className="text-light mx-auto">Loading...</p>
          )}
        </div>
        <Footer />
      </div>
    </SiteContext.Provider>
  );
};

export default Home;
