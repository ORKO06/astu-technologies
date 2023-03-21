import React from "react";
import Text1 from "../shared/Typography/Text1";
import DropDown from "../shared/DropDown";
import "./RoleDetailItem.css";
import { CgTrashEmpty, CgRedo } from "react-icons/cg";
import IconTooltip from "../shared/IconTooltip";

const RoleDetailItem = ({
  owner,
  accepted,
  email,
  onRoleChange,
  id,
  onDeleteUser,
}) => {
  return (
    <div className="RoleDetailItemContainer">
      <div className="Title">
        <Text1>{email}</Text1>
      </div>
      {owner ? (
        <Text1>Owner</Text1>
      ) : (
        <DropDown
          onChange={(e) => {
            onRoleChange(id, e.target.value);
          }}
          options={["admin", "owner"]}
        />
      )}
      {!owner && (
        // <button onClick={() => onDeleteUser(id)} className="DeleteButton">
        //
        // </button>
        <IconTooltip
          onClick={() => onDeleteUser(id)}
          icon={<CgTrashEmpty style={{ width: "20px", height: "20px" }} />}
          text="Delete this user"
        />
      )}
      {!accepted && (
        <IconTooltip
          icon={<CgRedo style={{ width: "24px", height: "24px" }} />}
          text="Resend Invite"
        />
      )}
    </div>
  );
};

export default RoleDetailItem;
