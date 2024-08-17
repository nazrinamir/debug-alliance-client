import React from "react";
import CardHolder from "../component/molecules/CardHolder";
import { data } from "../dataStorage/dataStorage";
import DAfooterOfficial from "../component/molecules/DAfooterOfficial";

function Squad() {
  return (
    <div className="">
      {/* <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div>
        <h1 className="squada-one-regular text-white">Debug Alliance Squad</h1>
        <div className="flex items-center justify-center mb-10">
          <img className="md:w-1/2 rounded-2xl " src="/Resources/squad.jpeg" />
        </div>
        <div className="md:mx-auto md:w-[80%] w-full pb-2 ">
          <CardHolder data={data}/>
        </div>
      </div>
    </div>
  );
}

export default Squad;
