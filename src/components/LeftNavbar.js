import React from "react";
import "./LeftNavbar.css";
import logo from "../assets/logo.png";
import NavCard from "./NavCard";
import {
  MdOutlineCreateNewFolder,
  MdOutlineFolderShared,
  MdOutlineFolderOpen,
} from "react-icons/md";
import Text1 from "./shared/Typography/Text1";

const LeftNavbar = () => {
  return (
    <div className="Nav">
      <img className="NavLogo" src={logo} alt="CASHWISE" />
      <NavCard />
      <ul className="NavItems">
        <li className="NavItem">
          <MdOutlineCreateNewFolder className="NavItemIcon" />
          <Text1> Document Generation</Text1>
        </li>
        <li className="NavItem">
          <MdOutlineFolderShared className="NavItemIcon" />
          <Text1> Corporate Documents</Text1>
        </li>
        <li className="NavItem">
          <MdOutlineFolderOpen className="NavItemIcon" />
          <Text1> Filing Documents </Text1>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavbar;
