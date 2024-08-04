import React from "react";

const DAbtn03 = ({label, handleclick}) => {
  return (
    <button
    onClick={handleclick}
      className="px-4 p-2 rounded-lg text-white hover:text-gray-600 transition transform active:scale-95 w-1/3 bg-[#399918] "
      type="submit"
    >
      {label}
    </button>
  );
};

export default DAbtn03;
