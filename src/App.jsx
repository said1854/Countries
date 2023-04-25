import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, initCountry] = useState([]);
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
        initCountry(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="country-container">
        {countries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
