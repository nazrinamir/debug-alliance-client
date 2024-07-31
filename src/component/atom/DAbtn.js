import React from "react";
import { Link } from "react-router-dom";

const DAbtn = ({ to, label, Icon, createTab }) => {

  return (
    <div className="">
      <Link to={to} target={createTab == "ON" ? "_blank": ""}>
        <button className="flex bg-[#FFD600] squada-one-regular rounded-2xl p-2 items-center text-center text-[#6A0606] ring-2 hover:ring-inset w-full">
          {Icon && <Icon className="mr-2" />} {/* Render the icon if provided */}
          <div className="w-full ">{label}</div>
        </button>
      </Link>
    </div>
  );
};

export default DAbtn;
