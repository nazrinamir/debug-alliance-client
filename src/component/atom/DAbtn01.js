import React from "react";
import { Link } from "react-router-dom";

const DAbtn = ({ to, label, Icon, createTab, dueTime }) => {
  // Get current time
  const now = new Date();
  // Convert dueTime to a Date object
  const dueDate = new Date(dueTime);

  // Check if current time is past due time
  const isDisabled = now > dueDate;

  return (
    <div className="">
      <Link className="no-underline" to={to} target={createTab === "ON" ? "_blank" : ""}>
        <button
          className={`flex bg-[#FFD600] squada-one-regular rounded-2xl p-2 items-center text-center text-[#6A0606] ring-2 hover:ring-inset w-full ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isDisabled}
          // Disable button interaction if past due time
          onClick={(e) => isDisabled && e.preventDefault()}
        >
          {Icon && <Icon className="mr-2" />} {/* Render the icon if provided */}
          <div className="w-full">{label}</div>
        </button>
      </Link>
    </div>
  );
};

export default DAbtn;
