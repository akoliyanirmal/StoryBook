import React, { useState, useEffect, useRef } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      !drawerRef.current?.contains(event.target as Node) && setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>
      {isOpen && <div className="fixed inset-0 z-50 bg-black opacity-50"></div>}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 z-50"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="mt-4 cursor-pointer">
          <p className="text-xl font-semibold">Menu</p>
          <ul className="mt-2">
            <li className="py-2" onClick={handleItemClick}>
              Inbox
            </li>
            <li className="py-2" onClick={handleItemClick}>
              Starred
            </li>
            <li className="py-2" onClick={handleItemClick}>
              Send Email
            </li>
            <li className="py-2" onClick={handleItemClick}>
              Drafts
            </li>
          </ul>
          <hr className="my-4 border-gray-700" />
          <p className="text-xl font-semibold">Folders</p>
          <ul className="mt-2">
            <li className="py-2" onClick={handleItemClick}>
              All Mail
            </li>
            <li className="py-2" onClick={handleItemClick}>
              Trash
            </li>
            <li className="py-2" onClick={handleItemClick}>
              Spam
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
