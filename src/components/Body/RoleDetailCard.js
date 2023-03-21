import React from "react";
import Text0 from "../shared/Typography/Text0";
import "./RoleDetailCard.css";
import RoleDetailItem from "./RoleDetailItem";

const RoleDetailCard = ({ data, onRoleChange, onDeleteUser }) => {
  return (
    <div className="CardContainer">
      <div className="RoleDetailCardHeader">
        <h4 className="RoleEmails">Co-workers Emails</h4>
        <Text0>Roles</Text0>
      </div>

      {data.map((dat) => (
        <RoleDetailItem
          onDeleteUser={onDeleteUser}
          owner={dat.role === "owner" ? true : false}
          accepted={dat.accepted}
          email={dat.email}
          onRoleChange={onRoleChange}
          id={dat.id}
        />
      ))}
    </div>
  );
};

export default RoleDetailCard;
