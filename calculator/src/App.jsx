import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleDelete = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="output">{expression}</div>
      <div className="row">
        <button className="double" onClick={handleClear}>
          AC
        </button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className="double" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;