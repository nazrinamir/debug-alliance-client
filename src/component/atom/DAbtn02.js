import React from "react";

const DAbtn02 = ({ label, onClick }) => {
  // Determine the button text based on the label
  const txtDef = "Pergi";
  const txt = label === txtDef ? "Mmasuk Bosskurr" : label ;

  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-gray-500 hover:bg-[#FFD006] transition-colors duration-700 px-4 py-2 rounded-lg mt-4 text-white"
    >
      {txt}
    </button>
  );
};

export default DAbtn02;
