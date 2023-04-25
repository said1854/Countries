import { useEffect, useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountry] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [q, setQ] = useState("");
  // const [filteredCountry, setFilteredCountry] = useState(countries);
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
        setCountry(res);
        setIsLoaded(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const filter = (e) => {
    const keyword = e.target.value;
    console.log(keyword);
    setQ(keyword);
    if (keyword !== "") {
      const results = countries.filter((country) => {
        return country.name.common.toLowerCase().startsWith(q.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setCountry(results);
    } else {
      setCountry(countries);
    }
  };

  return (
    <div className="App">
      <Header />
      <input className="mx-auto border" value={q} onChange={filter} />
      <div className="w-2/3 mx-auto container bg-dark mt-8">
        {isLoaded ? (
          countries.map((country, index) => {
            return <CountryCard country={country} key={index} />;
          })
        ) : (
          <p className="text-light">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
