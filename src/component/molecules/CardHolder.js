import React from "react";
import Card from "../atom/Card";
import { data } from "../../dataStorage/dataStorage";

const CardHolder = () => {
    return (
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-center items-center mx-auto bg-gray-500 bg-opacity-35 rounded-xl shadow-inner gap-4 p-4">
          {data.map((item, index) => (
            <Card key={index} src={item.src} name={item.name} desc={item.desc} />
          ))}
        </div>
      </div>
    );
  };
  

export default CardHolder;
