import React from "react";

const Card = ({ src, name, desc, pos }) => {
  return (
    <div className="relative min-w-[250px] squada-one-regular text-white text-left">
      <div className="rounded-2xl flex md:flex-col sm:flex-row overflow-hidden hover:scale-105 transition-transform duration-1000  border-[#700404]  shadow-xl">
        <div className="relative bg-player w-2/4 md:w-full h-1/2 md:h-64 overflow-hidden">
          <img className="w-60 h-full object-cover translate-y-5" src={src} alt={name} />
          <div className="absolute top-4 left-3 md:top-5 md:left-5 rotate-45 rounded-tr-xl rounded-bl-xl bg-yellow-500 shadow-inner shadow-yellow-100 uppercase p-2 w-8 md:w-10 h-8 md:h-10 text-center z-10">
            <div className="-rotate-45 text-sm md:text-md w-full">{pos}</div>
          </div>
        </div>
        <div className="md:p-2 p-6 bg-[#701404] w-3/4 md:text-center md:w-full md:h-fit uppercase z-10">
          <div className="md:h-6 text-md md:text-lg font-semibold">{name}</div>
          <div className="md:h-12 text-sm">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
