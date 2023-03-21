import React, { useState } from "react";
import "./Body.css";
import { FiChevronLeft } from "react-icons/fi";
import Text0 from "./shared/Typography/Text0";
import InviteCard from "../components/Body/InviteCard";
import RoleDetailCard from "./Body/RoleDetailCard";

const Body = () => {
  const [invited, setInvited] = useState([
    { id: "x", email: "akshay@cashwise.in", role: "owner", accepted: true },
    { id: "a", email: "shivanju@cashwise.in", role: "admin", accepted: true },
    { id: "b", email: "siddhant@cashwise.in", role: "admin", accepted: true },
  ]);

  const onSendingInvite = (value) => {
    const state = [...invited, ...value];
    state.sort((a, b) => a.role < b.role);
    setInvited(state);
    console.log(invited);
  };

  const onRoleChange = (id, value) => {
    const newData = invited.map((inp) => {
      if (inp.id === id) {
        return { ...inp, role: value };
      }

      return inp;
    });
    setInvited(newData);
  };

  const onDeleteUser = (id) => {
    const newData = invited.filter((inp) => inp.id !== id);
    setInvited(newData);
  };

  return (
    <div className="HomeScreen">
      <div className="HomeBackContainer">
        <FiChevronLeft className="BackIcon" />
        <Text0>Co-Workers</Text0>
      </div>
      <InviteCard onSendingInvite={onSendingInvite} />
      <RoleDetailCard
        onDeleteUser={onDeleteUser}
        onRoleChange={onRoleChange}
        data={invited}
      />
    </div>
  );
};

export default Body;
