import React, { useState } from 'react';
import '../../Drawer.css'
import { CloseIcon } from '../../styles/icon';
const Drawer = ({ children, isOpen, onClose }) => {
  return (
    <div className={`drawer text-white ${isOpen ? 'open' : ''}`}>
      <div className="drawer-overlay" onClick={onClose}/>
      <div className="drawer-content relative p-4 m-2 rounded-xl shadow-2xl overflow-hidden">
        <button onClick={onClose} className='absolute top-5 left-5'><CloseIcon/></button>
        {children}
        <div className={`absolute bottom-2 left-2 right-2 w-auto text-sm md:text-md text-center py-2 border-2 rounded-lg border-dashed`}>HAKCIPTA 2024 © 2022 KMY CODESYNC PRODUCTION</div>
      </div>
    </div>
  );
};

export default Drawer;
