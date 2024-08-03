import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./component/molecules/navBar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Squad from "./pages/Squad";
import Match from "./pages/Match";
import Admin from "./pages/Administrator/Admin";
import DAfooterOfficial from "./component/molecules/DAfooterOfficial";
import Setting from "./pages/Administrator/Setting";
// import { ShopIcon } from "./styles/icon";
// import DAbtn from "./component/atom/DAbtn";

function App() {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App bg-[#700404] h-[100dvh] w-full">
      <Router>
        <div className="squada-one-regular sticky top-0 w-full flex md:flex-col items-center z-50 ">
          <header className=" justify-between w-full p-4 bg-transparent md:px-5 md:max-w-[80%] ">
            <div className="flex h-full gap-5 md:flex-row md:gap-0">
              <div className="flex flex-row md:flex-row md:ml-0 w-fit md:w-fit">
                <div className="flex gap-3 md:justify-center  text-2xl font-semibold text-center whitespace-nowrap text-cyan-950 my-auto">
                  <Link to="/">
                    <img
                      loading="lazy"
                      src="/Ellipse 2.png"
                      alt=""
                      className="shrink-0 aspect-square w-[70px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-row w-full uppercase h-full items-center justify-end">
                {/* Add Your Items of Nav Item */}
                <NavBar onContactClick={scrollToBottom} />
              </div>
            </div>
          </header>
        </div>

        <Routes>
          {/* Add Your Page Route Here */}
          <Route path="/" exact Component={Landing} />
          <Route path="/Contact" exact Component={Contact} />
          <Route path="/Shop" exact Component={Shop} />
          <Route path="/Squad" exact Component={Squad} />
          <Route path="/Match" exact Component={Match} />
          <Route path="/Admin" exact Component={Admin} />
          <Route path="/Setting" exact Component={Setting} />
        </Routes>
      </Router>
      <div ref={bottomRef}/>
    </div>
  );
}

export default App;
