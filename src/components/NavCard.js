import React from "react";
import companyLogo from "../assets/companyLogo.png";
import "./NavCard.css";
import { BiChevronRight } from "react-icons/bi";
import Text1 from "./shared/Typography/Text1";
import Text2 from "./shared/Typography/Text2";

const NavCard = () => {
  return (
    <div className="NavCard">
      <img src={companyLogo} alt="" />
      <div className="CompanyDetails">
        <Text1>Entity Name</Text1>
        <Text2>www.website.com</Text2>
      </div>
      <BiChevronRight className="RightIcon" />
    </div>
  );
};

export default NavCard;
