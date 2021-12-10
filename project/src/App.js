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
        oldDisplay = oldDisplay.replace("×", "*");
        oldDisplay = oldDisplay.replace("÷", "/");

        return eval(oldDisplay);
      } catch (error) {
        makeNil();
        console.log(error);
        alert("syntax error");
      }
    });
  };

  return (
    <div className="App">
      <title>Calculator</title>

      <div id="display-window">
        <label id="display">{display}</label>
      </div>
      <MakeNumberButtons concatDisplay={concatDisplay} />
      <MakeOperationButtons concatDisplay={concatDisplay} />

      <button id="equals" onClick={() => equals()}>
        =
      </button>
      <button id="C" onClick={() => makeNil()}>
        C
      </button>
    </div>
  );
}

export default App;
