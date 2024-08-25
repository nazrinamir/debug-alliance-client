import React, { useEffect, useState } from 'react';
import '../../Modal.css';


/**
 * Modal is used to show for the user to make any under going process in the page or creating any information inside the page ONLY.
 * @description bug the animation to faide in and fade out is not working
 * @param {HTMLElement} children - cara nak guna untuk ni hanya satu div tag sahaja, and you guys can put the creativitty inside, anyuthing you want. 
 * @param {boolean} isOpen - dont worry untuk part in , changing value boolean dalam ni just kena ada buat useState dalam page korenag kalauy nak add,  
 * @param {boolean} onClose - sama jugak yang ni, value true/ false yang nak dipakai dalam ni kena ada call dalam page korang 
 * 
 *  Aku create example ni untuk korang copy paste the function dalam page korang  
 * 
 * @example 
 * const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 *  
 *  katakan la korang nak pakai 
 *  macam ni cara dia nak pakai 
 *  @example
 *  <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <div>Sedang diproses...</div>
          <Button03 label={"Selesai"} handleClick={()=>{closeModal()}} />
        </div>
      </Modal>
 * @returns 
 * Created in 18 August 2024 by Nazrin.
 */ 
const ModalPlayer = ({ children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'fade-in' : 'fade-out'}`}>
      <div className={`modal-content ${isOpen ? 'slide-in' : 'slide-out'}`}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalPlayer;
