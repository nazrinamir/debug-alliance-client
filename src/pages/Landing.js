import React from "react";
import History from "../component/atom/History";
import DAfooterOfficial from "../component/molecules/DAfooterOfficial";

function Landing() {
  return (
    <div className="h-full">
      <img
        className="absolute top-0 bg-cover bg-repeat-y w-full h-full md:min-h-[121vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      />
      <div className="md:p-[10rem] py-10 bg-cover bg-no-repeat bg-[url('https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/georgiadogs.com/images/2023/8/10/23FAC_Sanford_Stadium_19.jpg')] ">
        <History />
      </div>
      <footer className="mx-auto w-[80%] mt-10">
        <DAfooterOfficial align="left" />
      </footer>
    </div>
  );
}

export default Landing;
