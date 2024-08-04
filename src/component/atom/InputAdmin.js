import React from "react";

const InputAdmin = ({ type, value, onChange }) => {
  const inputType = type === 1 ? "password" : "text";
  return (
    <div className="w-full">
      <input
        className="text-black rounded-lg p-2 w-3/4"
        type={inputType}
        value={value}
        onChange={onChange}
        maxLength={100}
      />
    </div>
  );
};

export default InputAdmin;
