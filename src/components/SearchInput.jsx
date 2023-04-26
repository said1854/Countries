import React from "react";

const SearchInput = ({
  q,
  filter,
  selectedItem,
  populationFilter,
  handleSelectChange,
}) => {
  return (
    <div className="flex w-5/6 mx-auto mt-4">
      <button className="btn" onClick={populationFilter}>
        Population
      </button>
      <input
        className="mx-auto border flex m-2 px-2"
        value={q}
        onChange={filter}
      />
      <div>
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
        <button className="btn ml-4">Size</button>
      </div>
    </div>
  );
};

export default SearchInput;
