import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Topbar = ({
  orderByPopulation,
  orderbyArea,
  sortbyContinent,
  handleContinentSelect,
  handleOrderByPopulation,
  selectValue,
}) => {
  return (
    <div className="flex justify-between w-5/6 mx-auto mt-4">
      <div>
        <button className="btn mr-4" onClick={handleOrderByPopulation}>
          <span>Population</span>
          {orderByPopulation && <FontAwesomeIcon icon={faArrowDown} />}
        </button>
        <button className="btn">Area</button>
      </div>
      <input type="text" className="bg-light rounded-xl" />
      <select
        name="continent"
        value={selectValue}
        onChange={handleContinentSelect}
      >
        <option value="">Select Continent</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="africa">Africa</option>
        <option value="oceania">Oceania</option>
        <option value="north america">North America</option>
        <option value="south america">South America</option>
        <option value="antarctica">Antarctica</option>
        <option value="all">All</option>
      </select>
    </div>
  );
};

export default Topbar;
