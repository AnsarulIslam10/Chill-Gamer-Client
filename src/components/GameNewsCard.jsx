import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const GameNewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-white dark:bg-slate-800 h-[100%] p-6">
      <img src={news.image} alt="" />
      <div className="flex justify-between items-center mt-1">
      <p className="text-gray-400 text-sm flex gap-1"><FaCalendarAlt className="mt-[1.5px]"/>{news.date}</p>
      <p className="text-red-400 text-sm flex gap-1"><FaNewspaper className="mt-[1.5px]"/>{news.source}</p>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-500 font-semibold my-2">{news.title}</h2>
      <p className="text-gray-500">
        {isExpanded ? news.description : `${news.description.slice(0, 160)}...`}
      </p>
      <button onClick={handleToggle} className="text-cyan-500 font-semibold items-center flex justify-center">
        <span>{isExpanded ? "Show Less" : "Read More"}</span>
        <span className="mt-1 text-lg">{isExpanded? <MdKeyboardDoubleArrowUp/> : <MdKeyboardDoubleArrowDown />}</span>
      </button>
    </div>
  );
};

export default GameNewsCard;
