import React from "react";
import DAbtn from "../component/atom/DAbtn01";
import DAfooterOfficial from "../component/molecules/DAfooterOfficial";
import CountdownTimer from "../component/atom/CountdownTimer";

const targetDate = "2024-08-08T00:00:00Z";

function Shop() { 
  return (
    <div className="">
      {/* <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div className="bg-yellow-500 bg-cover bg-no-repeat bg-opacity-25">
        <h1 className="squada-one-regular text-white font-bold underline pt-10 text-center">
          DEBUG ALLIANCE MERCHANDISE
        </h1>
        <div className="lg:flex w-[80%]  p-10 items-center justify-center mx-auto">
          <div className="lg:w-3/5 w-full">
            <div className="w-3/5 mx-auto scale-100 hover:scale-105 transition-transform duration-1000">
              <img
                className="rounded-xl hover:shadow-lg"
                src="/resources/baju.jpeg"
                alt="DA_HK24"
              />
            </div>
          </div>
          <div className="lg:w-2/5 w-full flex flex-col justify-end">
            <div className="squada-one-regular text-white font-bold lg:text-[3.5rem] p-4">
              DEBUG ALLIANCE <br />
              HOME KIT 24'
            </div>
            <div className="squada-one-regular text-white font-bold lg:text-[1.5rem] p-4">
              Opening purchase at 31 July 2024 !
            </div>
            <CountdownTimer targetDate={targetDate} />
            <div className="w-full">
              <DAbtn
                to={"https://google.com"}
                dueTime={targetDate} // ISO 8601 format (UTC time)
                createTab={"ON"}
                label={"Purchase"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
