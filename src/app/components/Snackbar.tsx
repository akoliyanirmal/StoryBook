import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export interface SnackbarProps {
  message: string;
  onUndo: () => void;
}

const Snackbar = ({ message, onUndo }: SnackbarProps) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClose = () => {
    setShowSnackbar(false);
  };

  const handleUndo = () => {
    onUndo();
    setShowSnackbar(false);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (showSnackbar) {
      timeout = setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [showSnackbar]);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={() => setShowSnackbar(true)}
      >
        OPEN SNACKBAR
      </button>

      <div
        className={`${
          showSnackbar
            ? "transition-all duration-500 ease-in-out transform opacity-100 translate-y-0"
            : "transition-all duration-500 ease-in-out transform opacity-0 translate-y-2"
        } fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md`}
      >
        <span className="mr-2">{message}</span>
        <button className="text-white ml-2 " onClick={handleUndo}>
          UNDO
        </button>

        <button
          className="text-white ml-2 relative top-1 "
          onClick={handleClose}
        >
          <IoClose className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
