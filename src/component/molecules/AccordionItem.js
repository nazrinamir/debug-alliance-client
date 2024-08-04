import React, { useState } from "react";

const AccordionItem = ({ type, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const subAcc =
    type === "sub" ? "text-xl bg-[#EE4E4E]" : "text-[2.5rem] bg-[#A91D3A]";

  return (
    <div className="rounded-md mb-2">
      <button
        onClick={toggleAccordion}
        className={`w-full p-2 text-white ${subAcc}`}
      >
        {title}
      </button>
      <div className={`accordion-content  ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
