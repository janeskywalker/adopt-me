
    const Pet = () => {
        return React.createElement("div", {}, [
            React.createElement("h1", {}, "luna"),
            React.createElement("h2", {}, "Dog"), 
            React.createElement("h3", {}, "Havanese"), 
        ])
    }
    
    
    
    // creating a component called App
    const App = () => {
        return React.createElement(
            // the tag of the component
            "div",
            // attribute passed to the div
            { id: "something-important"}, [
            // children passed to the component 
            
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),

            ]
    
        )
    }

    ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
    )
