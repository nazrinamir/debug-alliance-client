import React from "react";
import History from "../component/atom/History";

function Landing() {
  return (
    <div className="h-full">
      <img
        className="absolute top-0 bg-cover bg-repeat w-full h-screen z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      />
      <div className="p-[10rem] bg-cover bg-no-repeat bg-[url('https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/georgiadogs.com/images/2023/8/10/23FAC_Sanford_Stadium_19.jpg')] ">
        <History/>
      </div>
    </div>
  );
}

export default Landing;
