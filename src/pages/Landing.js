import React from "react";
import History from "../component/atom/History";
import DAfooterOfficial from "../component/molecules/DAfooterOfficial";

function Landing() {
  return (
    <div className="h-full">
      {/* <img
        className="absolute top-0 bg-cover bg-repeat-y w-full h-full md:min-h-[121vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div className=" py-10 object-cover ">
        <History />
      </div>
    </div>
  );
}

export default Landing;
