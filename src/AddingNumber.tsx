import { useState } from 'react';
import React = require('react');

interface Ivalues {
  value1: number;
  value2: number;
}

export const AddingNumber: React.FC = () => {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [total, setTotal] = useState<number>();

  function AddTogether(): void {
    setTotal(number1 + number2);
  }

  return (
    <React.Fragment>
      {/* <h1>Adding Two numbers</h1> */}
      <div className="parent">
        <input
          className="inputStyle"
          onChange={(e) => {
            setNumber1(parseInt(e.target.value));
          }}
        />

        <span className="align">+</span>

        <input
          className="inputStyle"
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />

        <span className="align">=</span>
        <div>{total}</div>
      </div>
      <div className="button">
        <button onClick={AddTogether}>Add</button>
      </div>
    </React.Fragment>
  );
};
