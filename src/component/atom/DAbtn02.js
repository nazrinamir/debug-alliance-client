import React from "react";

const DAbtn02 = ({ location, label, onClick }) => {
  // Determine the button text based on the label
  const txtDef = "Pergi";
  const txt = label === txtDef ? "Mmasuk Bosskurr" : "back";

  // Handle the button click
  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute the provided onClick function
    }
    if (label === txtDef) {
      window.location.href = location; // Navigate to the specified location
    } else {
      window.location.href = "/"; // Navigate to default route if not
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-gray-500 hover:bg-[#FFD006] transition-colors duration-700 px-4 py-2 rounded-lg mt-4 text-white"
    >
      {txt}
    </button>
  );
};

export default DAbtn02;
