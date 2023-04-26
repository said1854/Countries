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
        setCountry(sortedRes);
        setInitialCountry(sortedRes);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const filter = (e) => {
    const query = e.target.value.toLowerCase();
    setQ(query);
    console.log(query);

    if (e.target.value == "") {
      setCountry(countries);
    } else {
      const newArray = initialCountry.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.includes(query);

        // return country.name.common.toLowerCase().startsWith(q.toLowerCase());
      });
      setCountry(newArray);
    }
  };
  // const filter = () => {};
  // const filter = (e) => {
  //   const query = e.target.value;
  //   setQ(query);
  //   console.log(query);

  //   if (query == "") {
  //     pass;
  //   } else {
  //     const newArray = countries.filter((country) => {
  //       return country.name.common.toLowercase().startsWith(query);
  //     });
  //     setCountry(newArray);
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <SearchInput q={q} filter={filter} />
      <div className="w-2/3 mx-auto px-6 container flex flex-wrap bg-dark mt-8">
        {/* {if (isLoaded){ 
           <p>Loaded</p>
        }else{ <p>not Loaded</p>}
}          
           */}
        {isLoaded ? (
          countries.map((country, index) => {
            return <CountryCard country={country} key={index} />;
          })
        ) : (
          <p className="text-light">Is Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
