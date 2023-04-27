import { useEffect, useState } from "react";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";
import SearchInput from "./components/SearchInput";

function App() {
  const [initialCountry, setInitialCountry] = useState([]);
  const [countries, setCountry] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredCountries, setFilteredCountries] = new useState(countries);
  const [q, setQ] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [sortByPopulation, setSortByPopulation] = useState(false);
  const [order, setOrder] = useState(false);

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
        setCountry(sortedRes);
        setInitialCountry(sortedRes);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const unitedNationsFilter = () => {
    console.log("united nations filter got triggered!");
    const newArray = initialCountry.filter((country) => {
      return country.unMember;
    });
    console.log(newArray);
    // setCountry(newArray);
  };

  const populationFilter = (e) => {
    const populationSort = countries.sort((a, b) => {
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
    setSortByPopulation(!sortByPopulation);
    setCountry(populationSort);
    console.log(populationSort);
  };

  const filter = (e) => {
    const query = e.target.value.toLowerCase();
    setQ(query);
    console.log(query);
    if (e.target.value == "") {
      setCountry(countries);
    } else {
      const newArray = initialCountry.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        // const countryCapital = country.capital[0].toLowerCase();
        // console.log(country.capital[0]);
        return countryName.includes(query);
      });
      setCountry(newArray);
    }
  };

  const handleSelectChange = (e) => {
    console.log("Select func triggered!");
    const query = e.target.value.toLowerCase();
    setOrder(false);
    setSortByPopulation(false);
    console.log(query);
    setSelectedItem(query);
    if (query !== "") {
      const newArray = initialCountry.filter((country) => {
        return country.continents[0].toLowerCase().includes(query);
      });
      setCountry(newArray);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchInput
        q={q}
        filter={filter}
        selectedItem={selectedItem}
        sortByPopulation={sortByPopulation}
        populationFilter={populationFilter}
        handleSelectChange={handleSelectChange}
        unitedNationsFilter={unitedNationsFilter}
      />
      <div className="w-5/6 mx-auto p-6 container flex flex-wrap bg-dark mt-8 rounded">
        {isLoaded ? (
          countries.map((country, index) => {
            return (
              <CountryCard
                country={country}
                index={index}
                order={order}
                key={index}
              />
            );
          })
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
