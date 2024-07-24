import React, { useState } from "react";
import NavItem from "../atom/navItem";
import DAbtn from "../atom/DAbtn";
import { DrawerIcon, ShopIcon } from "../../styles/icon";


const navitem = [
  { to: "/", label: "HOME" },
  { to: "/Match", label: "NEWS" },
  { to: "/contact", label: "CONTACT" },
  { to: "/Squad", label: "SQUAD" },
  // {to:"/Shop", label:"Shop" },
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      </div>
    </nav>
  );
};

export default NavBar;
