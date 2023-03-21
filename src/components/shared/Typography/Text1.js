import React from "react";

const Text1 = ({ children }) => {
  return (
    <h5
      style={{
        lineHeight: "20px",
        fontSize: "16px",
        fontWeight: 400,
      }}
    >
      {children}
    </h5>
  );
};

export default Text1;
