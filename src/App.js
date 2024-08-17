import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./component/molecules/navBar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Squad from "./pages/Squad";
import Match from "./pages/Match";
import Admin from "./pages/Administrator/Admin";
import DAfooterOfficial from "./component/molecules/DAfooterOfficial";
import Setting from "./pages/Administrator/Setting";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const bottomRef = useRef(null);
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname === "/Admin" || pathname === "/Setting") {
      setShowNavbar(false);
      console.log(
        "%cYou are Trespassing! If you are not an Admin, Please Leave.",
        "color: red; font-weight: bold; font-size: 16px;"
      );
    } else {
      setShowNavbar(true);
      console.log(
        "%cUser Mode Captured",
        "color: green; font-weight: bold; font-size: 16px;"
      );
    }
  }, [window.location.pathname]);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative App bg-[#700404] bg-cover min-h-screen flex flex-col">
      <Router>
        {showNavbar && (
          <div className="squada-one-regular sticky top-0 w-full flex md:flex-col items-center z-50">
            <header className="justify-between w-full p-2 bg-[#700404] bg-opacity-50 backdrop-blur-md md:px-5 md:w-full">
              <div className="flex h-full md:max-w-[80%] mx-auto gap-5 md:flex-row md:gap-0">
                <div className="flex flex-row md:flex-row md:ml-0 w-fit md:w-fit">
                  <div className="flex gap-3 md:justify-center text-2xl font-semibold text-center whitespace-nowrap text-cyan-950 my-auto">
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
                  <NavBar onContactClick={scrollToBottom} />
                </div>
              </div>
            </header>
          </div>
        )}
        <footer className="absolute bottom-0 right-0 left-0">
        <DAfooterOfficial align="left" />
      </footer>
        {!showNavbar && (
          <h4 className="squada-one-regular text-white mt-10">
            This page is only created for Admin.
            <br /> If you are right here by accident or intentionally please
            inform the bug and leave this page immediately.
          </h4>
        )}

        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Shop" exact element={<Shop />} />
          <Route path="/Squad" exact element={<Squad />} />
          <Route path="/Match" exact element={<Match />} />
          <Route path="/Admin" exact element={<Admin />} />
          <Route path="/Setting" exact element={<Setting />} />
        </Routes>
      </Router>
      
      <div ref={bottomRef} />
    </div>
  );
}

export default App;
