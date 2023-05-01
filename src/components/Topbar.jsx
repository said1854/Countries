import { faArrowDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Topbar = ({
  orderByPopulation,
  orderByArea,
  handleContinentSelect,
  handleOrderByPopulation,
  handleOrderByArea,
  selectValue,
  handleSearch,
  unMember,
  handleUnMemberSort,
  natoMember,
  handleNatoMemberSort,
}) => {
  return (
    <div className="flex justify-between w-5/6 mx-auto mt-4">
      <div className="w-1/3">
        <button className="btn mr-4" onClick={handleOrderByPopulation}>
          <span className="mr-2">Population</span>
          {orderByPopulation && <FontAwesomeIcon icon={faArrowDown} />}
        </button>
        <button className="btn mr-4" onClick={handleOrderByArea}>
          <span className="mr-2">Area</span>
          {orderByArea && <FontAwesomeIcon icon={faArrowDown} />}
        </button>
        <button className="btn mr-4" onClick={handleNatoMemberSort}>
          <span className="mr-2">Nato Member</span>
          {natoMember && <FontAwesomeIcon icon={faThumbsUp} />}
        </button>
      </div>
      <div className="w-1/3 text-center h-full">
        <input
          placeholder="Search Country"
          type="text"
          className="bg-light rounded-xl px-4 py-2"
          onChange={handleSearch}
        />
      </div>
      <div className="w-1/3 text-right py-2">
        <select
          name="continent"
          value={selectValue}
          onChange={handleContinentSelect}
        >
          <option value="" disabled selected>
            Select Continent
          </option>
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
    </div>
  );
};

export default Topbar;
