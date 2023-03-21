import React, { useState } from "react";
import DropDown from "../shared/DropDown";
import Input from "../shared/Input";

const InputType = ({ email, id, onEmailChange, onRoleChange }) => {
  return (
    <div className="InviteItem">
      <Input
        type="Email"
        value={email}
        onChange={(e) => {
          onEmailChange(id, e.target.value);
        }}
      />
      <DropDown
        onChange={(e) => {
          onRoleChange(id, e.target.value);
        }}
        options={["admin", "owner"]}
      />
    </div>
  );
};

export default InputType;
