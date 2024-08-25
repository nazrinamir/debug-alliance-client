import React, { useState } from "react";
import ModalPlayer from "../molecules/ModalPlayer";
import Card from "./Card";

const TablePlayer = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const openModal = (player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  return (
    <div className="w-full p-2">
      <table className="w-[90%] mx-auto text-center bg-[#3a4a61] shadow-inner shadow-slate-400 rounded-md overflow-hidden">
        <thead className="bg-slate-700 border-b-[0.5px]">
          <tr className="">
            <th className="w-10 p-2">No.</th>
            <th className="text-left w-1/2">Name</th>
            <th>Pos</th>
            <th>Age</th>
            <th>Foot</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              className="border-y hover:bg-slate-800 transition-colors duration-500"
              onClick={() => openModal(item)}
              key={index}
            >
              <td className="p-2">{index + 1}</td>
              <td className="text-left">{item.name}</td>
              <td>{item.pos}</td>
              <td>{item.age}</td>
              <td>{item.foot}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPlayer && (
        <ModalPlayer isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-20">
            <Card {...selectedPlayer} />
          </div>
        </ModalPlayer>
      )}
    </div>
  );
};

export default TablePlayer;
