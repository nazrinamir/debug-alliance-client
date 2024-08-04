import React from "react";
import InputLogin from "../../component/molecules/InputLogin";
import DAbtn02 from "../../component/atom/DAbtn02";

function Admin() {
  return (
    <div className="mt-10 bg-[#FF7777] bg-opacity-35 p-6  w-[50%] mx-auto squada-one-regular text-white rounded-xl shadow-2xl">
      <h1>Welcome to Admin Page</h1>
      <h4>Please Login to Introduce Yourself</h4>
      <div className="h-full w-full mx-auto my-10 md:text-xl">
        <div className="flex flex-col p-2 w-[60%] mx-auto gap-y-4">
          <InputLogin type={2} label={"username"} />
          <InputLogin type={1} label={"password"} />
        </div>
        <DAbtn02 location={"/Setting"} label={"Pergi"}/>
      </div>
    </div>  
  );
}

export default Admin;
