import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../atom/navItem";
import DAbtn from "../atom/DAbtn01";
import { DrawerIcon, ShopIcon } from "../../styles/icon";
import Drawer from "./Drawer";

const navitem = [
  { to: "/", label: "HOME" },
  { to: "/Match", label: "NEWS" },
  { to: "/Squad", label: "SQUAD" },
];

const NavBar = ({ onContactClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="squada-one-regular sticky top-0 w-full flex md:flex-col items-center z-50">
      <header className="justify-between w-full backdrop-blur-md md:px-5 md:w-full">
        <div className="flex h-full md:max-w-[80%] mx-auto gap-5 md:flex-row items-center md:gap-0 p-2">
          <div className="flex flex-row md:flex-row md:ml-0 w-fit md:w-fit">
            <div className="flex gap-3 md:justify-center text-2xl font-semibold text-center whitespace-nowrap text-cyan-950 my-auto">
              <Link to="/">
                <img
                  loading="lazy"
                  src="/Ellipse 2.png"
                  alt="Logo"
                  className="shrink-0 aspect-square w-[70px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row w-full uppercase h-full items-center justify-end">
            <div className="md:flex hidden items-center gap-x-7">
              {navitem.map((item, index) => (
                <NavItem key={index} to={item.to} label={item.label} />
              ))}
              <div className="w-full">
                <button
                  onClick={onContactClick}
                  className="text-md w-full text-nowrap"
                >
                  CONTACT US
                </button>
              </div>
              <div>
                <DAbtn to="/shop" label="SHOP" Icon={ShopIcon} />
              </div>
            </div>

            {/* Drawer Mobile */}
            <button className="md:hidden flex flex-col" onClick={toggleDrawer}>
              <DrawerIcon />
            </button>
          </div>
        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="h-full w-full">
          <div className="flex flex-col items-center gap-y-4">
            {navitem.map((item, index) => (
              <NavItem key={index} to={item.to} label={item.label} handleClick={()=>{setIsDrawerOpen(false)}} />
            ))}
            <button onClick={onContactClick} className="text-md w-full  text-nowrap">
              CONTACT US
            </button>
            <DAbtn to="/shop" label="SHOP" Icon={ShopIcon} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
