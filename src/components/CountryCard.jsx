const CountryCard = (props) => {
  return (
    <div className="w-1/4 m-2 bg-light border rounded-lg">
      <h3>Country Name: {props.country.name.common}</h3>
      <p>Population: {props.country.population.toLocaleString()}</p>
      <p>Capital: {props.country.capital}</p>
      <img
        src={props.country.flags.png}
        alt={props.country.flags.alt}
        width={100}
      />
      <p>Continents: {props.country.continents}</p>
    </div>
  );
};

export default CountryCard;
