import React, { useState } from "react";
import Text1 from "../shared/Typography/Text1";
import { BiInfoCircle } from "react-icons/bi";
import "./InviteCard.css";
import InputType from "./InputType";
import IconTooltip from "../shared/IconTooltip";

const InviteCard = ({ onSendingInvite }) => {
  const [input, setInput] = useState([
    { id: 1, email: "", role: "admin", accepted: false },
  ]);

  const onAddInput = () => {
    setInput([
      ...input,
      {
        id: Math.floor(Math.random() * 100) + 2,
        email: "",
        role: "admin",
        accepted: false,
      },
    ]);
  };

  const updateInputEmail = (id, value) => {
    const newData = input.map((inp) => {
      if (inp.id === id) {
        return { ...inp, email: value };
      }

      return inp;
    });
    setInput(newData);
  };

  const updateInputRole = (id, value) => {
    const newData = input.map((inp) => {
      if (inp.id === id) {
        return { ...inp, role: value };
      }

      return inp;
    });
    setInput(newData);
  };

  const onClickSendingInvite = () => {
    console.log(input);
    onSendingInvite(input);
    setInput([{ id: 1, email: "", role: "admin", accepted: false }]);
  };

  return (
    <div className="CardContainer">
      <div className="InviteCardHeader">
        <Text1>Invite your co-workers to collaborate on Cashwise.</Text1>
        <IconTooltip
          icon={<BiInfoCircle />}
          text="Invited co-workers would have all the permissions except the option to delete the company"
        />
      </div>
      <div className="InviteItemContainer">
        {input.map((inp) => (
          <InputType
            email={inp.email}
            key={inp.id}
            id={inp.id}
            onRoleChange={updateInputRole}
            onEmailChange={updateInputEmail}
          />
        ))}
      </div>
      <div className="ButtonContainer">
        <button
          onClick={() => {
            onAddInput();
          }}
          className="AddInputButton"
        >
          + Add More
        </button>
        <button onClick={onClickSendingInvite} className="SendInviteButton">
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default InviteCard;
