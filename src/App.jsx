import { Link, Routes, Route, NavLink } from "react-router-dom";
import SiteContext from "./context/SiteContext";
import Home from "./pages/Home";
import About from "./pages/About";
import CountryDetails from "./components/CountryDetails";
import NatoMembers from './data/nato.json';
import { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
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
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Data coud not be fetched!');
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    fetchData()
      .then((res) => {
        console.debug(res);
        setInitialCountry(res);
        setShownCountries(res);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.debug(e.message);
      });
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword == '') {
      setShownCountries(shownCountries);
    } else {
      const newArray = initialCountry.filter((country) =>
        country.name.common.toLowerCase().includes(keyword.toLowerCase()),
      );
      setShownCountries(newArray);
    }
  };

  const handleContinentSelect = (e) => {
    setSelectValue(e.target.value);
    setOrderByPopulation(false);
    setOrderByArea(false);
    setNatoMember(false);
    if (e.target.value == 'all') {
      setShownCountries(initialCountry);
      setSortByContinent(false);
    } else if (e.target.value !== '') {
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
      setSelectValue('');
    }
    setOrderByArea(false);
    setOrderByPopulation(false);
  };

  useEffect(() => {
    localStorage.setItem('initialCountry', initialCountry);
    console.log('countries written to local storage');
    console.log(initialCountry);
  }, [initialCountry]);

  const data = {
    theme,
    setTheme,
    language,
    setLanguage,
    orderByArea,
    shownCountries,
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:countryName" element={<CountryDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </SiteContext.Provider>
  );
};

export default App;
