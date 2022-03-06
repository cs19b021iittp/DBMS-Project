import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        hello
        <button
          onClick={() => {
            const x = {
              title: "hello",
              description: "world",
            };
            fetch("/api/todos", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(x),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

export default App;
