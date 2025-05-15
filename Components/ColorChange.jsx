import { useState } from "react";
import './ColorChange.css';

const ColorChange = () => {
  const [color, setColor] = useState('');

  const handleClick = (clr) => {
    setColor(clr);
  };

  return (
    <div className="color-container" style={{ backgroundColor: color }}>
      <div className="color-buttons">
        <button className="color-button red" onClick={() => handleClick('red')}>Red</button>
        <button className="color-button yellow" onClick={() => handleClick('yellow')}>Yellow</button>
        <button className="color-button green" onClick={() => handleClick('green')}>Green</button>
      </div>
    </div>
  );
};

export default ColorChange;
