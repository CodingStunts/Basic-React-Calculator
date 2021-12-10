import "./App.css";
import React, { useState } from "react";
import MakeNumberButtons from "./components/numbers-buttons.js";
import MakeOperationButtons from "./components/operations-buttons.js";

function App() {
  let [display, setDisplay] = useState("0");

  const concatDisplay = (digit) => {
    setDisplay((oldDisplay) => {
      if (oldDisplay.length === 1 && oldDisplay[0] === "0") {
        console.log(oldDisplay[0]);
        return oldDisplay.slice(1) + digit.toString();
      }
      return oldDisplay.toString() + digit.toString();
    });
  };

  const makeNil = () => {
    setDisplay(() => {
      return "0";
    });
  };

  const equals = () => {
    setDisplay((oldDisplay) => {
      try {
        return eval(oldDisplay);
      } catch (error) {
        makeNil();
        alert("syntax error");
      }
    });
  };

  return (
    <div className="App">
      <title>calculator</title>
      <h1>Calculator</h1>
      <label>{display}</label>
      <MakeNumberButtons concatDisplay={concatDisplay} />
      <MakeOperationButtons concatDisplay={concatDisplay} />

      <button id="equals" onClick={() => equals()}>
        =
      </button>
      <button id="AC" onClick={() => makeNil()}>
        AC
      </button>
    </div>
  );
}

export default App;
