import React from "react";

const Card = ({ src, name, desc, pos, foot }) => {
  return (
    <div className="relative  bg-player md:min-w-[250px] h-[305px] md:min-h-[450px] squada-one-regular hover:scale-105 transition-transform duration-1000 text-white text-left p-2 ">
      <div className="rounded-2xl flex flex-col border-[#700404]">
        <div className="relative flex items-center justify-center overflow-hidden w-full h-full md:h-64 ">
          <div>
            <img className="w-64 h-full object-contain translate-y-10" src={src} alt={name} />
          </div>
          <div className="absolute top-7 left-3 md:top-16 md:left-5 rotate-45 rounded-tr-xl rounded-bl-xl bg-yellow-500 shadow-inner shadow-yellow-100 uppercase p-2 w-8 md:w-10 h-8 md:h-10 text-center z-10">
            <div className="-rotate-45 text-sm md:text-md w-full">{pos}</div>
          </div>
        </div>
        <div className="md:p-2 p-6 bg-transparent  text-center w-full h-auto uppercase z-10">
          <div className="md:h-6 text-md md:text-lg font-semibold tracking-wider">{name}</div>
          <div className="md:h-12 text-xs md:text-sm">Power Foot: {foot}</div>
          <div className="md:h-12 text-xs md:text-sm">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
