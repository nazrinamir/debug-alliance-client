import React, { useState } from "react";
import NavItem from "../atom/navItem";
import DAbtn from "../atom/DAbtn";
import { DrawerIcon, ShopIcon } from "../../styles/icon";
import Offcanvas from "react-bootstrap/Offcanvas";

const navitem = [
  { to: "/", label: "HOME" },
  { to: "/Match", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
  { to: "/Squad", label: "SQUAD" },
  // {to:"/Shop", label:"Shop" },
];
let boolDrawer = false;
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow((boolDrawer = !boolDrawer));

  return (
    <nav className="h-full">
      <div className="flex">
        <div className="flex flex-row gap-x-7 items-center w-full h-full text-lg p-4 upppercase text-white">
          <div className="md:flex hidden items-center gap-x-7">
            {navitem.map((item, index) => (
              <NavItem key={index} to={item.to} label={item.label} />
            ))}
            <DAbtn to="/shop" label="SHOP" Icon={ShopIcon} />
          </div>

          <button className="md:hidden flex flex-col" onClick={handleShow}>
            <DrawerIcon></DrawerIcon>
          </button>
        </div>
        <div className=" z-10">
          <Offcanvas show={show} onHide={handleClose}>
            <img
              className="absolute top-0 bg-cover bg-repeat w-full h-full md:min-h-[115vh] z-[-1]"
              src="debug-images/bg-main.png"
              alt="bgMain"
            />
            <div className="p-4">
              <Offcanvas.Header closeButton>
                <div>
                  <Offcanvas.Title>
                    <div className="squada-one-regular text-[#FFD600] text-2xl">DEBUG ALLIANCE</div>
                  </Offcanvas.Title>
                </div>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="flex flex-col items-center gap-x-7 squada-one-regular">
                  {navitem.map((item, index) => (
                    <NavItem key={index} to={item.to} label={item.label}/>
                  ))}
                  <DAbtn to="/shop" label="SHOP" Icon={ShopIcon} />
                </div>
              </Offcanvas.Body>
            </div>
          </Offcanvas>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
