import { useContext, useEffect, useState } from "react";
import SiteContext from "../context/SiteContext";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const [initialCountry, setInitialCountry] = useState([]);
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
    fetchData()
      .then((res) => {
        console.log(res);
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
        setInitialCountry(sortedRes);
        setShownCountries(sortedRes);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    console.log(keyword);
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
      console.log(newArray);
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
      <Topbar />
      <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark mt-8 rounded-xl">
        {isLoaded ? (
          shownCountries.map((country, index) => {
            return <CountryCard country={country} index={index} key={index} />;
          })
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </div>
      <Footer />
    </SiteContext.Provider>
  );
};

export default Home;
