import React from "react";
import DAfooterOfficial from "../component/molecules/DAfooterOfficial";
import CardHolder from "../component/molecules/CardHolder";
import { dataNews } from "../dataStorage/dataStorage";
import Carousel from "../component/molecules/Carousel";

function Match() {
  return (
    <div className=" w-[80%] mx-auto">
      {/* <img
        className="absolute top-0 bg-cover bg-repeat w-full h-[122vh] z-[-1]"
        src="debug-images/bg-main.png"
        alt="bgMain"
      /> */}
      <div className="h-full w-full">
        <h1 className="squada-one-regular text-white my-4">Berita Harian</h1>
        <div className=" mb-10">
          <Carousel images={dataNews} />
        </div>
      </div>
    </div>
  );
}

export default Match;
