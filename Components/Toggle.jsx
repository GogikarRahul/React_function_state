import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import './Toggle.css'; // Import the CSS file

const Toggle = () => {
  const [theme, setTheme] = useState(false);

  const handleToggle = () => {
    setTheme(prev => !prev);
  };

  return (
    <div
      className="toggle-container"
      style={{ backgroundColor: theme ? "black" : "white", color: theme ? "white" : "black" }}
    >
      <button className="toggle-button" onClick={handleToggle}>
        {theme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Toggle;
