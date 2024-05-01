import React, { useState, useEffect, useRef } from "react";
import { MdMoveToInbox, MdEmail, MdMarkEmailUnread } from "react-icons/md";
import { TbTagStarred } from "react-icons/tb";
import { FaFirstdraft, FaTrash } from "react-icons/fa";
import { RiSpam2Fill } from "react-icons/ri";

export interface DrawerProps {
  anchor?: "bottom" | "left" | "right" | "top";
}

const Drawer: React.FC<DrawerProps> = ({ anchor = "left" }) => {
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

  const getDrawerPosition = () => {
    switch (anchor) {
      case "bottom":
        return "bottom-0 w-full max-h-1/2";
      case "left":
        return "left-0 h-full h-[114%] w-[25%] max-h-113%";
      case "right":
        return "right-0 h-full h-[114%] w-[25%] max-w-3/4";
      case "top":
        return "top-0 w-full max-h-1/2";
      default:
        return "left-0 h-full max-w-3/4";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleDrawer}
      >
        Open Drawer
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
      <div
        ref={drawerRef}
        className={`fixed ${getDrawerPosition()} bg-gray-800 text-white p-4 z-50 overflow-y-auto`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="mt-4 cursor-pointer">
          <p className="text-xl font-semibold">Menu</p>
          <ul className="mt-2">
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <MdMoveToInbox className="mr-2" /> Inbox
            </li>
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <TbTagStarred className="mr-2" />
              Starred
            </li>
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <MdEmail className="mr-2" />
              Send Email
            </li>
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <FaFirstdraft className="mr-2" />
              Drafts
            </li>
          </ul>
          <hr className="my-4 border-gray-700" />
          <p className="text-xl font-semibold">Folders</p>
          <ul className="mt-2">
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <MdMarkEmailUnread className="mr-2" />
              All Mail
            </li>
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <FaTrash className="mr-2" />
              Trash
            </li>
            <li className="flex items-center py-2" onClick={handleItemClick}>
              <RiSpam2Fill className="mr-2" />
              Spam
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
