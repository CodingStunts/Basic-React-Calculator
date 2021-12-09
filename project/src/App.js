import "./App.css";
import React, { useState } from "react";

function App() {
  let [display, setDisplay] = useState(0);

  const concatInput = (digit) => {
    setDisplay((oldDisplay) => {
      console.log(oldDisplay);
      /*       if (oldDisplay === "0") {
        console.log("hello");
        return oldDisplay.unshift([0]);
      } else { */
      return String(oldDisplay) + String(digit);
      //}
    });
  };

  const numberButtons = [
    { 0: 0 },
    { 1: 1 },
    { 2: 2 },
    { 3: 3 },
    { 4: 4 },
    { 5: 5 },
    { 6: 6 },
    { 7: 7 },
    { 8: 8 },
    { 9: 9 },
  ];

  let operationButtons = [
    { 0: "-" },
    { 1: "+" },
    { 2: "/" },
    { 3: "*" },
    { 4: "." },
    { 5: "AC" },
    { 6: "=" },
  ];

  const MakeNumberButtons = () => {
    return (
      <div>
        <h1>Buttons</h1>
        {numberButtons.map((button, i) => (
          <button onClick={() => concatInput(button[i])}>{button[i]}</button>
        ))}
      </div>
    );
  };

  const MakeOperationButtons = () => {
    return (
      <div>
        {operationButtons.map((button, i) => (
          <button onClick={() => concatInput(button[i])}>{button[i]}</button>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <label>{display}</label>
      <MakeNumberButtons />
      <MakeOperationButtons />
    </div>
  );
}

export default App;
