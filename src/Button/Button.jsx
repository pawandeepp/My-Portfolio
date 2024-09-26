import React from "react";
import "./button.css";
const Button = ({ text, color , customColor}) => {
  return (
    <div className={color ? "black text-center" : "white lets-talk text-center"} style={customColor ? {backgroundColor:customColor} : {} }>
      <button type="submit">
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;

// pass propes as text and color
