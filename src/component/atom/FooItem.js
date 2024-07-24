import React from "react";
import { Link } from "react-router-dom";

const FooItem = ({ to, srcImages }) => {
  return (
    <div>
      <Link to={to}>
        <div className="w-1/2 mx-auto md:w-full flex items-center justify-center">
          <img src={srcImages}></img>
        </div>
      </Link>
    </div>
  );
};

export default FooItem;
