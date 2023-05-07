const CountryCard = ({ country, index, orderByArea, orderByPopulation }) => {
  return (
    <div className="w-56 mx-auto my-4 bg-light rounded-xl font-dark font-mono">
      <img
        className="h-36 w-full rounded-t-xl"
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <div className="text-sm p-2">
        <div className="text-xl font-serif flex">
          {orderByArea && !orderByPopulation ? <h4>{index + 1} -</h4> : <></>}
          {orderByPopulation && !orderByArea ? <h4>{index + 1} -</h4> : <></>}
          {country.name.common}
        </div>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Area: {country.area.toLocaleString()} km2</p>
        <p>Capital: {country.capital}</p>
        <p>
          <span className="bold">Continent:</span> {country.continents}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
