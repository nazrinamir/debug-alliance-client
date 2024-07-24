import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <div className="flex bg-red-600">
      <Link to={to}>
        <button className="bg-red-500">{label}</button>
      </Link>
    </div>
  );
};

export default NavItem;
