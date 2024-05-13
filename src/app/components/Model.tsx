import React, { useState } from "react";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded  max-w-md w-full z-20">
            <div className="border border-gray-300 p-4 rounded">
              <h1>Text in a modal</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                minus numquam ipsam?
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
