const CountryCard = (props) => {
  return (
    <div className="w-56 h-56 bg-light border rounded-lg">
      <h3 className="">Country Name: {props.country.name.common}</h3>
      <p>Population: {props.country.population.toLocaleString()}</p>
      <p>Capital: {props.country.capital}</p>
      <p>Continents: {props.country.continents}</p>

      <img
        src={props.country.flags.png}
        alt={props.country.flags.alt}
        width={100}
      />
    </div>
  );
};

export default CountryCard;
