import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchInput = ({
  q,
  filter,
  selectedItem,
  populationFilter,
  handleSelectChange,
  sortByPopulation,
  unitedNationsFilter,
}) => {
  return (
    <div className="flex w-5/6 mx-auto mt-4">
      <div>
        <button className="btn" onClick={populationFilter}>
          <span className="mr-2">Population</span>
          {sortByPopulation && <FontAwesomeIcon icon={faArrowDown} />}
        </button>
        <button className="btn ml-4" onClick={unitedNationsFilter}>
          United Nations
        </button>
        <button className="btn ml-4">Size</button>
      </div>
      <input
        className="mx-auto border flex m-2 px-2"
        value={q}
        onChange={filter}
      />

      <select
        name="continent"
        value={selectedItem}
        onChange={handleSelectChange}
      >
        <option value="">Select Continent</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="africa">Africa</option>
        <option value="oceania">Oceania</option>
        <option value="north america">North America</option>
        <option value="south america">South America</option>
        <option value="antarctica">Antarctica</option>
      </select>
    </div>
  );
};

export default SearchInput;
