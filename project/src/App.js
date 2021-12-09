import "./App.css";
import React, { useState } from "react";
import MakeNumberButtons from "./components/numbers-buttons.js";
import MakeOperationButtons from "./components/operations-buttons.js";

function App() {
  let [display, setDisplay] = useState(0);

  const concatDisplay = (digit) => {
    setDisplay((oldDisplay) => {
      return oldDisplay.toString() + digit.toString();
    });
  };

  const makeNil = () => {
    setDisplay((oldDisplay) => {
      return 0;
    });
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <label>{display}</label>
      <MakeNumberButtons concatDisplay={concatDisplay} />
      <MakeOperationButtons concatDisplay={concatDisplay} />
      <button id="equals">=</button>
      <button
        id="AC"
        onClick={() =>
          makeNil(() => {
            return 0;
          })
        }
      >
        AC
      </button>
    </div>
  );
}

export default App;
