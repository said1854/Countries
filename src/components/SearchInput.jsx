import React from "react";

const SearchInput = ({ q, filter }) => {
  return (
    <div>
      <input
        className="mx-auto border flex m-2 px-2"
        value={q}
        onChange={filter}
      />
    </div>
  );
};

export default SearchInput;
