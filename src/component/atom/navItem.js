import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label, handleClick }) => {
  return (
    <div className="h-full w-full uppercase ">
      <Link to={to}>
        <button className="text-white w-full p-2 " onClick={handleClick}>
          {label}
        </button>
      </Link>
    </div>
  );
};

export default NavItem;
