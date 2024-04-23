import React, { useState } from "react";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

export type ToggleProps = {
  onChangeLeft: () => void;
  onChangeCenter: () => void;
  onChangeRight: () => void;
  buttonColor?:
    | "standard"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";

  //! HTML PROPS
  //*   value?: string;
  //*   disabled?: boolean;
  //*   fullWidth?: boolean;
  //*   onClick?: () => void;
  //*   selected?: boolean;
  //*   size?: "small" | "medium" | "large";
};

const Toggle: React.FC<ToggleProps> = ({
  onChangeLeft,
  onChangeCenter,
  onChangeRight,
  buttonColor = "standard",

  //* ADDITIONAL PROPS
  ...props
}) => {
  const [alignment, setAlignment] = useState<"left" | "center" | "right">(
    "left"
  );

  const handleLeftClick = () => {
    setAlignment("left");
    onChangeLeft();
  };

  const handleCenterClick = () => {
    setAlignment("center");
    onChangeCenter();
  };

  const handleRightClick = () => {
    setAlignment("right");
    onChangeRight();
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={handleLeftClick}
          className={`flex items-center justify-center px-4 py-2 border rounded-md transition duration-300 ease-in-out 
          ${
            buttonColor === "primary"
              ? "bg-blue-500 text-white border-blue-500"
              : buttonColor === "secondary"
                ? "bg-gray-400 text-gray-800 border-gray-400"
                : buttonColor === "error"
                  ? "bg-red-500 text-white border-red-500"
                  : buttonColor === "info"
                    ? "bg-blue-400 text-white border-blue-400"
                    : buttonColor === "success"
                      ? "bg-green-500 text-white border-green-500"
                      : buttonColor === "warning"
                        ? "bg-yellow-500 text-white border-yellow-500"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
          //* Spread all additional props
          {...props}
        >
          <FaAlignLeft className="mr-2" />
        </button>

        <button
          onClick={handleCenterClick}
          className={`flex items-center justify-center px-4 py-2 border rounded-md transition duration-300 ease-in-out 
          ${
            buttonColor === "primary"
              ? "bg-blue-500 text-white border-blue-500"
              : buttonColor === "secondary"
                ? "bg-gray-400 text-gray-800 border-gray-400"
                : buttonColor === "error"
                  ? "bg-red-500 text-white border-red-500"
                  : buttonColor === "info"
                    ? "bg-blue-400 text-white border-blue-400"
                    : buttonColor === "success"
                      ? "bg-green-500 text-white border-green-500"
                      : buttonColor === "warning"
                        ? "bg-yellow-500 text-white border-yellow-500"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
          //* Spread all additional props
          {...props}
        >
          <FaAlignCenter className="mr-2" />
        </button>

        <button
          onClick={handleRightClick}
          className={`flex items-center justify-center px-4 py-2 border rounded-md transition duration-300 ease-in-out 
          ${
            buttonColor === "primary"
              ? "bg-blue-500 text-white border-blue-500"
              : buttonColor === "secondary"
                ? "bg-gray-400 text-gray-800 border-gray-400"
                : buttonColor === "error"
                  ? "bg-red-500 text-white border-red-500"
                  : buttonColor === "info"
                    ? "bg-blue-400 text-white border-blue-400"
                    : buttonColor === "success"
                      ? "bg-green-500 text-white border-green-500"
                      : buttonColor === "warning"
                        ? "bg-yellow-500 text-white border-yellow-500"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          }`}
          //* Spread all additional props
          {...props}
        >
          <FaAlignRight className="mr-2" />
        </button>
      </div>

      <div
        className={`w-full p-4 border border-gray-300 ${
          alignment === "left"
            ? "text-left"
            : alignment === "center"
              ? "text-center"
              : "text-right"
        }`}
      >
        <p>
          Nature is all the animals, plants, and other things in the world that
          are not made by people, and all the events and processes that are not
          caused by people. The most amazing thing about nature is its infinite
          variety. ... grasses that grow wild in nature.
        </p>
      </div>
    </div>
  );
};

export default Toggle;
