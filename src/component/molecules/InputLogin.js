import React from "react";
import LabelAdmin from "../atom/LabelAdmin";
import InputAdmin from "../atom/InputAdmin";

const InputLogin = ({ type, label }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <LabelAdmin text={label} />
        <InputAdmin type={type} />
      </div>
    </div>
  );
};

export default InputLogin;
