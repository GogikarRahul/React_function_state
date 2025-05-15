import { useState } from "react";
import './RandomColor.css';

const RandomColor = () => {
  const [color, setColor] = useState('');

  const handleClick = () => {
    const chars = 'abcdef0123456789';
    let hexa = '#';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      hexa += chars[randomIndex];
    }
    setColor(hexa);
  };

  return (
    <div className="random-color-container" style={{ backgroundColor: color }}>
      <button className="random-color-button" onClick={handleClick}>
        Click to Change Color
      </button>
    </div>
  );
};

export default RandomColor;
