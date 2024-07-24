import React from 'react';
import NavItem from '../atom/navItem';

const navitem =[
    {to:"/", label:"Home" },
    {to:"/Match", label:"News" },
    {to:"/contact", label:"Contact" },
    {to:"/Squad", label:"Squad" },
    // {to:"/Shop", label:"Shop" },
]

const NavBar = () => {
  return (
    <nav className='h-full'>
      <div className='flex flex-row gap-x-7 items-center w-full h-full text-lg p-4'>
        {navitem.map((item, index) => (
          <NavItem key={index} to={item.to} label={item.label} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;