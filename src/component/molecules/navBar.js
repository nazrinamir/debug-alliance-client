import React from 'react';
import NavItem from '../atom/navItem';

const navitem =[
    {to:"/contact", label:"Contact Us" },
    {to:"/Shop", label:"Shop" },
    {to:"/Squad", label:"Squad" },
    {to:"/Match", label:"Match" },
]

const NavBar = () => {
  return (
    <nav className='bg-red-500'>
      <div className='flex flex-row border-2 border-red-500 bg-red-400'>
        {navitem.map((item, index) => (
          <NavItem key={index} to={item.to} label={item.label} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;