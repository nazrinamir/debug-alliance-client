import React from "react";

const Card = ({ src, name, desc }) => {
  return (
    <div className="squada-one-regular text-white text-left">
      <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 mx-auto border border-gray-500 max-w-xs w-full">
        <div className="bg-black h-64 overflow-hidden">
          <img className="w-full h-full object-cover" src={src} alt={name} />
        </div>
        <div className="p-6 bg-gray-600 h-fit uppercase">
          <div className="h-12 text-lg font-bold">{name}</div>
          <div className="h-24 text-sm">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
