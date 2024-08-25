import React from "react";
import Card from "../atom/Card";

const CardHolder = ({ data, state }) => {
  const mode = state === "center" ? "w-fit mx-auto" : "w-fit";

  return (
    <div className={`p-1 ${mode} w-full`}>
      <div className="flex flex-wrap gap-6 items-center justify-center rounded-xl shadow-inner w-full">
        {data.map((item, index) => (
          <Card 
            key={index} 
            src={item.src || "/default-image.png"} // Provide a default image if src is not available
            name={item.name || "Unknown"} // Provide a default name if name is not available
            desc={item.desc || "No description"} // Provide a default description if desc is not available
            pos={item.pos ||"UD" } // UD is stands for undefined
            foot={item.foot ||"UD" } // UD is stands for undefined

          />
        ))}
      </div>
    </div>
  );
};

export default CardHolder;
