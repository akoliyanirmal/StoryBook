import React, { useState } from "react";
import { FaPlus, FaRegCopy, FaRegSave, FaPrint, FaShare } from "react-icons/fa";

const Dial: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDial = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const closeDial = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="relative" onMouseLeave={handleMouseLeave}>
        <button
          className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white shadow-lg focus:outline-none"
          onMouseEnter={handleMouseEnter}
          onClick={toggleDial}
        >
          <FaPlus />
        </button>
        <div
          className={`absolute flex flex-col gap-4 items-center justify-center bottom-16 right-0 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            className="w-10 h-10 bg-gray-500 rounded-full text-white shadow-lg focus:outline-none"
            onClick={closeDial}
          >
            <FaRegCopy className="relative left-3" />
          </button>
          <button
            className="w-10 h-10 bg-gray-500 rounded-full text-white shadow-lg focus:outline-none"
            onClick={closeDial}
          >
            <FaRegSave className="relative left-3" />
          </button>
          <button
            className="w-10 h-10 bg-gray-500 rounded-full text-white shadow-lg focus:outline-none"
            onClick={closeDial}
          >
            <FaPrint className="relative left-3" />
          </button>
          <button
            className="w-10 h-10 bg-gray-500 rounded-full text-white shadow-lg focus:outline-none"
            onClick={closeDial}
          >
            <FaShare className="relative left-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dial;
