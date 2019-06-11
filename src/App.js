import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// creating a component called App
const App = () => {
  //   return React.createElement(
  //     // the tag of the component
  //     "div",
  //     // attribute passed to the div
  //     { id: "something-important" },
  //     [
  //       // children passed to the component

  //       React.createElement("h1", {}, "Adopt Me!"),
  //       React.createElement(Pet, {
  //         name: "Luna",
  //         animal: "Dog",
  //         breed: "Havenese"
  //       }),
  //       React.createElement(Pet, {
  //         name: "Pepper",
  //         animal: "Bird",
  //         breed: "Cockteil"
  //       }),
  //       React.createElement(Pet, {
  //         name: "Doink",
  //         animal: "Cat",
  //         breed: "Mixed"
  //       })
  //     ]
  //   );

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
