import React, { useState } from "react";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0">
      {isLoading && (
        <div
          className="absolute inset-0 bg-black opacity-50 backdrop-blur"
          onClick={handleBackdropClick}
        ></div>
      )}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
        ) : (
          <button
            className="bg-white p-4 rounded shadow"
            onClick={handleButtonClick}
          >
            Click me!
          </button>
        )}
      </div>
    </div>
  );
};

export default Backdrop;
