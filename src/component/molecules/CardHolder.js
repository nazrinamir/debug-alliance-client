import React from "react";
import Card from "../atom/Card";

const CardHolder = ({ data, state }) => {
  const mode = state === "center" ? "w-fit mx-auto" : "w-fit";

  return (
    <div className={`p-1 ${mode} w-full`}>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rounded-xl shadow-inner w-full">
        {data.map((item, index) => (
          <Card key={index} src={item.src} name={item.name} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default CardHolder;
