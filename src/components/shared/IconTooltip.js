import React from "react";

const IconTooltip = ({ icon, text, onClick }) => {
  return (
    <div onClick={onClick} className="ReDoButton">
      {icon}
      <span className="ReDoButtontext">{text}</span>
    </div>
  );
};

export default IconTooltip;
