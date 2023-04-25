const CountryCard = (props) => {
  return (
    <div className="country">
      <p>Country Name: {props.country.name.common}</p>
      <p>Population: {props.country.population.toLocaleString()}</p>
      <img
        src={props.country.flags.png}
        alt={props.country.flags.alt}
        width={100}
      />
    </div>
  );
};

export default CountryCard;
