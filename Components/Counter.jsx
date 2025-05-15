import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleClick = (X) => {
    if (X === 0) {
      setCount(0);
    } else {
      setCount(count + X);
    }
  };

  return (
    <div className="counter-container">
      <h1>State Component Increment</h1>
      <h1>{count}</h1>
      <div className="button-group">
        <button
          className="counter-button increment"
          onClick={() => handleClick(10)}
          disabled={count === 100}
        >
          +
        </button>
        <button
          className="counter-button decrement"
          onClick={() => handleClick(-10)}
          disabled={count === 0}
        >
          -
        </button>
        <button className="counter-button reset" onClick={() => handleClick(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
