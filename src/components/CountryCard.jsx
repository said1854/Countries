const CountryCard = (props) => {
  return (
    <div className="w-56 m-2 bg-light border rounded-lg p-2 font-mono">
      <h3>Country Name: {props.country.name.common}</h3>

      <p>Population: {props.country.population.toLocaleString()}</p>
      <p>Capital: {props.country.capital}</p>
      <p>Continent: {props.country.continents}</p>
      <img
        className="rounded"
        src={props.country.flags.png}
        alt={props.country.flags.alt}
        width={100}
      />
    </div>
  );
};

export default CountryCard;
