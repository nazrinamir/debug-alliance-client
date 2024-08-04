import React, { useState } from "react";
import DAbtn02 from "../../component/atom/DAbtn02";
import ImageUpload from "../../component/molecules/ImageUpload";
import AccordionItem from "../../component/molecules/AccordionItem";
import InputAdmin from "../../component/atom/InputAdmin";

function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="squada-one-regular text-left text-white flex flex-col w-[60%] mx-auto p-4">
      <h1></h1>
      {/* News */}
      <AccordionItem title={"NEWS"}>
        <div className="flex flex-col w-full p-2">
          <div className="w-fit">Select Image :</div>
          <div className="w-full">
            <ImageUpload />
          </div>
        </div>
      </AccordionItem>
      {/* Squad */}

      <div className="w-full border border-b my-2" />
      <AccordionItem title={"SQUAD"}>
        <AccordionItem type={"sub"} title={"Edit Player "}>
          <div>
            <div>
              <label>Name :</label>
              <InputAdmin />
            </div>
            <div>
              <label>Description :</label>
              <InputAdmin />
            </div>
          </div>
          <button> Edit </button>
        </AccordionItem>
        <AccordionItem type={"sub"} title={"Add Player "}>
          <div>
            <div>
              <label>Name :</label>
              <InputAdmin />
            </div>
            <div>
              <label>Description :</label>
              <InputAdmin />
            </div>
          </div>
          <button> Add </button>
        </AccordionItem>
        <AccordionItem type={"sub"} title={"Delete Player "}>
          <div>
            <div>
              <label>Name :</label>
              <InputAdmin />
            </div>
            <div>
              <label>Description :</label>
              <InputAdmin />
            </div>
          </div>
          <button> Delete</button>
        </AccordionItem>
      </AccordionItem>
      <div className="w-full border border-b my-2" />
      <AccordionItem title={"MATCH"}>
        <div className="w-full">
          <div className="w-full">
            <label>Post a Match</label>
            <ImageUpload />
          </div>
        </div>
      </AccordionItem>
      <div className="w-full border border-b my-2" />
      <AccordionItem title={"MERCHANDISE"}>
        <div className="">
          <div className="flex flex-row">
            <div className="w-1/2">
              <label>Date start :</label>
              <InputAdmin />
            </div>
            <div className="w-1/2">
              <label>Date End :</label>
              <InputAdmin />
            </div>
          </div>
          <div className="mt-2">
            <label>Link Google Form :</label>
            <InputAdmin />
          </div>
          <button> Open Order </button>
        </div>
      </AccordionItem>
      <div className="w-full border border-b my-2" />
      <div>
        <DAbtn02 location={"/Admin"} label={"x"} />
      </div>
    </div>
  );
}

export default Setting;
