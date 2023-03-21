import React from "react";
import "./Input.css";

const Input = ({ value, type, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="InputBox"
      placeholder={type}
      type
    />
  );
};

export default Input;
