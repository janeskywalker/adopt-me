import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // this is a hook - useState - stateful logic with react
  // useState always gives back an array
  // hooks can not go inside of conditions or loops
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");

  return (
    <div className="search-params">
      <form>
        <lable htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            // onChange, call setLocation
            onChange={evt => setLocation(evt.target.value)}
          />
        </lable>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => updateAnimal(e.target.value)}
            onBlur={e => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
