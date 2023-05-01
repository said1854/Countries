const CountryCard = (props) => {
  return (
    <div className="w-56 mx-2 my-4 bg-light rounded-xl font-dark font-mono">
      <img
        className="h-36 w-full rounded-t-xl"
        src={props.country.flags.png}
        alt={props.country.flags.alt}
      />
      <div className="text-sm p-2">
        <div className="text-xl font-serif flex">
          {props.orderByArea && !props.orderByPopulation ? (
            <h4>{props.index + 1} -</h4>
          ) : (
            <></>
          )}
          {props.orderByPopulation && !props.orderByArea ? (
            <h4>{props.index + 1} -</h4>
          ) : (
            <></>
          )}
          {props.country.name.common}
        </div>
        <p>Population: {props.country.population.toLocaleString()}</p>
        <p>Area: {props.country.area.toLocaleString()}km2</p>
        <p>Capital: {props.country.capital}</p>
        <p>
          <span className="bold">Continent:</span> {props.country.continents}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
