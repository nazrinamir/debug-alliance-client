import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <div className="h-full w-full uppercase">
      <Link to={to}>
        <button className="">{label}</button>
      </Link>
    </div>
  );
};

export default NavItem;
