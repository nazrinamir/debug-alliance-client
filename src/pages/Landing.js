import React from "react";
import History from "../component/atom/History";
import '../App.css'

function Landing() {
  return (
    <div className="h-full">
      <div className=" py-10 h-screen flex flex-col items-center justify-center bright bg-slate-500 bg-stadium">
        <History />
      </div>
    </div>
  );
}

export default Landing;
