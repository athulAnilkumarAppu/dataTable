import React, { useMemo } from "react";
import { debounce } from "../../utils/utilFunctions";
import { SearchbarPropType } from "../../models/Interfaces";

const SearchBar: React.FC<SearchbarPropType> = ({ value, onSearchChange }) => {
  const debouncedSearch = useMemo(
    () => debounce(onSearchChange, 400),
    [onSearchChange],
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        defaultValue={value}
        onChange={(e) => debouncedSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
