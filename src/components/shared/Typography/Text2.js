import React from "react";

const Text2 = ({ children }) => {
  return (
    <h6
      style={{
        lineHeight: "18px",
        fontSize: "14px",
        fontWeight: 400,
        color: "#f5f5f5",
      }}
    >
      {children}
    </h6>
  );
};

export default Text2;
