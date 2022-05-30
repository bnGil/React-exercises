import React from "react";

function Input({ onInputChange, value }) {
  return (
    <input
      onChange={(e) => onInputChange(e.target.value)}
      value={value}
    ></input>
  );
}

export default Input;
