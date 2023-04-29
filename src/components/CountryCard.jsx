const CountryCard = (props) => {
  return (
    <div className="w-56 m-2 bg-light border rounded-lg p-2 font-mono">
      <h3>
        {props.orderByArea && !props.orderByPopulation ? (
          <h4>{props.index + 1}</h4>
        ) : (
          <></>
        )}
        {props.orderByPopulation && !props.orderByArea ? (
          <h4>{props.index + 1}</h4>
        ) : (
          <></>
        )}
        Country Name: {props.country.name.common}
      </h3>
      <img
        className="rounded"
        src={props.country.flags.png}
        alt={props.country.flags.alt}
        width={100}
      />
      <p>Population: {props.country.population.toLocaleString()}</p>
      <p>Area: {props.country.area.toLocaleString()}km2</p>
      <p>Capital: {props.country.capital}</p>
      <p>
        <span className="bold">Continent:</span> {props.country.continents}
      </p>
    </div>
  );
};

export default CountryCard;
