import React from "react";

function SearchBox({ query, setQuery, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search city..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyUp={onSearch}
      />
    </div>
  );
}

export default SearchBox;