import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './component/molecules/navBar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Squad from './pages/Squad';
import Match from './pages/Match';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="sticky top-0 w-full flex flex-col bg-slate-600 z-50 ">
        <header className=" justify-between w-full p-4 bg-slate-600 max-md:px-5 max-md:max-w-full shadow-xl">
          <div className="flex h-full gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
              <div className="   flex grow gap-3 justify-center px-2.5 py-px text-2xl font-semibold text-center whitespace-nowrap text-cyan-950 max-md:mt-10">
                <img
                  loading="lazy"
                  src=""
                  alt=""
                  className="shrink-0 aspect-square w-[50px]"
                />
                <div className="flex-auto my-auto">
                  <Link to="/">Debug Alliance</Link>
                </div>
              </div>
            </div>
            <div className="flex">
                {/* Add Your Items of Nav Item */}
                <NavBar/>
            </div>
          </div>
        </header>
      </div>

      <Routes>
        {/* Add Your Page Route Here */}
        <Route path="/" exact Component={Landing}/>
        <Route path="/Contact" exact Component={Contact}/>
        <Route path="/Shop" exact Component={Shop}/>
        <Route path="/Squad" exact Component={Squad}/>
        <Route path="/Match" exact Component={Match}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App

