const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ]);
};

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
        breed: "Havenese"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Havenese"
      })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
