import React from "react";

const SearchParams = () => {
  const locaton = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <lable htmlFor="location">
          location
          <input id="location" value={location} placeholder="location" />
        </lable>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
