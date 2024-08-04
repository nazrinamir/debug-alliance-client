import React from "react";

const Card = ({ src, name, desc }) => {
  return (
    <div className="squada-one-regular text-white text-left ">
      <div className="rounded-2xl overflow-hidden hover:scale-105 scale-100 w-[300px] transition-transform duration-1000 mx-auto border border-gray-500">
        <div className="bg-black h-[250px] overflow-hidden bg-fixed">
          <img className="w-full" src={src} />
        </div>
        <div className="p-6 bg-gray-600 h-fit uppercase">
          <div className=" h-[50px] ">{name}</div>
          <div className=" h-[100px]">"{desc}"</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
