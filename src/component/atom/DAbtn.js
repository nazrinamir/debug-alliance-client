import React from "react";
import { Link } from "react-router-dom";

const DAbtn = ({ to, label, Icon }) => {
  return (
    <div>
      <Link to={to}>
        <button className="flex bg-[#FFD600] rounded-2xl p-2 items-center text-[#6A0606]">
          {Icon && <Icon className="mr-2" />} {/* Render the icon if provided */}
          <div>{label}</div>
        </button>
      </Link>
    </div>
  );
};

export default DAbtn;
