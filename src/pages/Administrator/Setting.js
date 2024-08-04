// pages/Administrator/Setting.js
import React from "react";
import { useState } from "react";
import DAbtn02 from "../../component/atom/DAbtn02";
import ImageUpload from "../../component/molecules/ImageUpload";
import AccordionItem from "../../component/molecules/AccordionItem";
import InputAdmin from "../../component/atom/InputAdmin";
import useAuth from "../../hooks/useAuth";
import DAbtn03 from "../../component/atom/DAbtn03";

function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  // Check if the user is authenticated
  const isAuthenticated = !!localStorage.getItem("token");
  useAuth(isAuthenticated);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to login page
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
        <div className="w-full flex flex-col items-center justify-center">
          <DAbtn03
            label={"Submit"}
            handleclick={() => {
              console.log("Hello");
            }}
          />
        </div>
      </AccordionItem>
      {/* Squad */}
      <div className="w-full border border-b my-2" />
      <AccordionItem title={"SQUAD"}>
        <div className="mt-4">
          <AccordionItem type={"sub"} title={"Edit Player "}>
            <div className="">
              <div>
                <label>Name :</label>
                <InputAdmin />
              </div>
              <div>
                <label>Description :</label>
                <InputAdmin />
              </div>
            </div>
            <DAbtn03
            label={"Save Changes"}
            handleclick={() => {
              console.log("Edit");
            }}
          />
          </AccordionItem>
          <AccordionItem type={"sub"} title={"Add Player "}>
            <div className="">
              <div>
                <label>Name :</label>
                <InputAdmin />
              </div>
              <div>
                <label>Description :</label>
                <InputAdmin />
              </div>
            </div>
            <DAbtn03
            label={"Add"}
            handleclick={() => {
              console.log("Add");
            }}/>
          </AccordionItem>
          <AccordionItem type={"sub"} title={"Delete Player "}>
            <div className="">
              <div>
                <label>Name :</label>
                <InputAdmin />
              </div>
              <div>
                <label>Description :</label>
                <InputAdmin />
              </div>
            </div>
            <DAbtn03
            label={"Delete"}
            handleclick={() => {
              console.log("Delete");
            }}/>
          </AccordionItem>
        </div>
      </AccordionItem>

      {/* Match */}
      <div className="w-full border border-b my-2" />
      <AccordionItem title={"MATCH"}>
        <div className="w-full mt-4 ">
          <div className="w-full">
            <label>Post a Match</label>
            <ImageUpload />
          </div>
        </div>
      </AccordionItem>

      {/* Merchandise */}
      <div className="w-full border border-b my-2" />
      <AccordionItem title={"MERCHANDISE"}>
        <div className="mt-4">
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
          <DAbtn03
            label={"Open Order"}
            handleclick={() => {
              console.log("Open Order");
            }}/>
        </div>
      </AccordionItem>

      <div className="w-full border border-b my-2" />
      <div>
        <DAbtn02 label={"Log out"} onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Setting;
