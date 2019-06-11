import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// creating a component called App
const App = () => {
  return React.createElement(
    // the tag of the component
    "div",
    // attribute passed to the div
    { id: "something-important" },
    [
      // children passed to the component

      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havenese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockteil"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
