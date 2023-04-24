const CountryCard = (props) => {
  return (
    <div className="country" key={props.index}>
      <p>{props.item.name.common}</p>
      <p>{props.item.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;
