import React, { useState } from "react";

const CalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  function handleButtonClick(value) {
    setInput((prevInput) => prevInput + value);
  }

  function calculateResult() {
    try {
      setResult(eval(input));
      setInput("");
    } catch {
      setResult("ERROR");
    }
  }

  function clearResult() {
    setInput("");
    setResult("0");
  }
  return (
    <div className="calculator">
      <div className="main">
        <div className="display">
          <input type="text" readOnly value={input !== "" ? input : result} />
        </div>
        <div className="buttons">
          {numbers.map((number, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(number)}
              className="number-btn">
              {number}
            </button>
          ))}
          <button
            onClick={() => handleButtonClick("+")}
            className="operator-btn">
            +
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="operator-btn">
            -
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="operator-btn">
            *
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="operator-btn">
            /
          </button>
          <button onClick={calculateResult} className="eval-btn">=</button>
          <button onClick={clearResult} className="clear-btn">C</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
