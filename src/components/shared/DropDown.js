import React from "react";
import "./DropDown.css";

const DropDown = ({ options, onChange }) => {
  return (
    <select onChange={onChange} className="DropDownContainer">
      {options.map((opt, ind) => (
        <option key={ind} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
