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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    <div className="relative App-header bg-cover min-h-screen flex flex-col">
      <Router>
        {showNavbar && (
          <NavBar
            onContactClick={() => {
              scrollToBottom();
              setIsDrawerOpen(false);
            }}
          />
        )}
        {!showNavbar && (
          <h4 className="squada-one-regular text-white text-md text-center mt-10">
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
        {showNavbar && (
          <div className="mt-8">
            <DAfooterOfficial align="center" />
          </div>
        )}
      </Router>

      <div ref={bottomRef} />
    </div>
  );
}

export default App;
