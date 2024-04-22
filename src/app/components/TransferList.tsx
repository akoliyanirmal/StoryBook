import React, { useState } from "react";

export interface TransferListProps {
  leftItems: string[];
  rightItems: string[];
  onTransferLeft: (names: string[]) => void;
  onTransferRight: (names: string[]) => void;
}

const TransferList: React.FC<TransferListProps> = ({
  leftItems,
  rightItems,
  onTransferLeft,
  onTransferRight,
}) => {
  const [selectedLeft, setSelectedLeft] = useState<string[]>([]);
  const [selectedRight, setSelectedRight] = useState<string[]>([]);

  const handleSelectLeft = (name: string) => {
    const newSelectedLeft = [...selectedLeft, name];
    setSelectedLeft(newSelectedLeft);
  };

  const handleSelectRight = (name: string) => {
    const newSelectedRight = [...selectedRight, name];
    setSelectedRight(newSelectedRight);
  };

  const handleTransferLeft = () => {
    onTransferLeft(selectedRight);
    setSelectedRight([]);
  };

  const handleTransferRight = () => {
    onTransferRight(selectedLeft);
    setSelectedLeft([]);
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/3 border border-gray-300 rounded-md mr-4">
        <h2 className="text-center py-2 bg-gray-200">Left List</h2>
        <ul>
          {leftItems.map((name) => (
            <li
              key={name}
              className={`cursor-pointer p-2 hover:bg-gray-100 ${
                selectedLeft.includes(name) ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSelectLeft(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="m-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleTransferRight}
          disabled={selectedLeft.length === 0}
        >
          &gt;&gt;
        </button>
        <button
          className="m-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleTransferLeft}
          disabled={selectedRight.length === 0}
        >
          &lt;&lt;
        </button>
      </div>
      <div className="w-1/3 border border-gray-300 rounded-md ml-4">
        <h2 className="text-center py-2 bg-gray-200">Right List</h2>
        <ul>
          {rightItems.map((name) => (
            <li
              key={name}
              className={`cursor-pointer p-2 hover:bg-gray-100 ${
                selectedRight.includes(name) ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSelectRight(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
