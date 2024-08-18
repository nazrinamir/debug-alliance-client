import React from "react";

const Card = ({ src, name, desc }) => {
  return (
    <div className="squada-one-regular text-white text-left">
      <div className="rounded-2xl flex md:flex-col sm:flex-row  overflow-hidden hover:scale-105 transition-transform duration-300 mx-auto border border-gray-500 max-w-xs w-full">
        <div className="bg-black w-2/4 md:w-full h-1/2 md:h-64 overflow-hidden">
          <img className="w-full h-full object-cover" src={src} alt={name} />
        </div>
        <div className="p-6 bg-gray-600 w-3/4 md:w-full md:h-fit uppercase">
          <div className="md:h-12 text-lg font-semibold">{name}</div>
          <div className="md:h-24 text-sm">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
