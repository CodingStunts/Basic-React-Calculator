import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const addNumInput = () => {
    let defaultFigure = 0;
    const buttons = [
      "AC",
      "+",
      "-",
      "/",
      "*",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
      ".",
      "=",
    ];
    let [number, setNum] = useState(defaultFigure);
    concatInput = () => {
      setNum((number) => {
        return String(defaultFigure) + String(number);
      });
    };
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <label>{defaultFigure}</label>
      {buttons.map((button) => (
        <button onClick={() => concatInput(button)}>{button}</button>
      ))}

      {/*  <label>0</label>
      <br></br>
      <button>AC</button>
      <button id="+">+</button>
      <button id="-">-</button>
      <br></br>
      <button id="/">/</button>
      <button id="*">*</button>
      <button onClick={() => setNum(1)}>1)</button>
      <button id="2">2</button>
      <button id="3">3</button>
      <br></br>
      <button id="4">4</button>
      <button id="5">5</button>
      <button id="6">6</button>
      <br></br>
      <button id="7">7</button>
      <button id="8">8</button>
      <button id="9">9</button>
      <br></br>
      <button id="0">0</button>
      <button id=".">.</button>
      <button id="=">=</button> */}
      <addNumInput />
    </div>
  );
}

export default App;
