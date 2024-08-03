import React from "react";
import { Link } from "react-router-dom";

const DAbtn02 = ({ location, label }) => {
  let toValue = "";
  const txtDef = "Pergi";
  const txt = label == txtDef ? "Mmasuk Bosskurr" : "back";
  const checkLabel = () => {
    if (txt == txtDef) {
      toValue = location;
    } else {
      toValue = "/";
    }
  };
  return (
    <div>
      <Link className="text-white" to={toValue}>
        <button
          onClick={() => {
            checkLabel();
          }}
          type="submit"
          className="bg-gray-500 hover:bg-[#FFD006] transition-colors duration-700 px-4 py-2 rounded-lg mt-4"
        >
          {txt}
        </button>
      </Link>
    </div>
  );
};

export default DAbtn02;
