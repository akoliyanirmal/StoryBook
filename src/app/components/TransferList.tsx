import React, { useState } from "react";

export interface TransferListProps {
  items: string[];
  onTransfer: (item: string, direction: "left" | "right") => void;
}

const TransferList: React.FC<TransferListProps> = ({ items, onTransfer }) => {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState<string[]>([
    "Samara",
    "Tony",
    "Tessa",
  ]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleTransfer = (direction: "left" | "right") => {
    if (selectedItem) {
      if (direction === "left") {
        setRightItems(rightItems.filter((i) => i !== selectedItem));
        setLeftItems([...leftItems, selectedItem]);
      } else if (direction === "right") {
        setLeftItems(leftItems.filter((i) => i !== selectedItem));
        setRightItems([...rightItems, selectedItem]);
      }
      onTransfer(selectedItem, direction);
      setSelectedItem(null);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">Left Items</h3>
          <ul className="bg-gray-100 p-4 rounded-md">
            {leftItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer p-2 rounded ${
                  selectedItem === item ? "bg-blue-200" : "hover:bg-gray-200"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center w-1/12">
          <button
            className="mt-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleTransfer("right")}
          >
            &gt;
          </button>
          <button
            className="mt-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleTransfer("left")}
          >
            &lt;
          </button>
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">Right Items</h3>
          <ul className="bg-gray-100 p-4 rounded-md">
            {rightItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer p-2 rounded ${
                  selectedItem === item ? "bg-blue-200" : "hover:bg-gray-200"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
