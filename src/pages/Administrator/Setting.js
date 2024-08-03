import React from "react";
import DAbtn02 from "../../component/atom/DAbtn02";

function Setting() {
  return (
    <div className="squada-one-regular text-white">
      <h1>
        Things to update on the page Debug.
        <br />
        Such as <br />
        News...
        <br />
        Squad...
        <br />
        Contact...
        <br />
        Merch...
        <br />
      </h1>
      <DAbtn02 location={"/Admin"} label={"x"} />
    </div>
  );
}

export default Setting;
