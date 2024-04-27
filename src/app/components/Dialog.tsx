import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";

type dialogProps = {
  isOpen: boolean;
  onClose: (value: string) => void;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};

const Dialog = ({ isOpen, onClose, maxWidth }: dialogProps) => {
  const [users] = useState(["username@gmail.com", "user02@gmail.com"]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".dialog-container")) {
        onClose("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all 
              ${maxWidth ? "sm:my-8 sm:max-w-" + maxWidth : "sm:my-8 sm:max-w-lg"} sm:w-full dialog-container`}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Choose an account
                    </h3>
                    <div className="mt-2">
                      <ul className="divide-y divide-gray-200">
                        {users.map((user, index) => (
                          <li key={index} className="py-2">
                            <button
                              className="flex items-center w-full text-left text-blue-500"
                              onClick={() => onClose(user)}
                            >
                              {index === 2 ? (
                                <HiOutlinePlus className="mr-2" />
                              ) : (
                                <FaRegUserCircle className="mr-2" />
                              )}
                              {user}
                            </button>
                          </li>
                        ))}
                        <li className="py-2">
                          <button
                            className="flex items-center w-full text-left text-blue-500"
                            onClick={() => onClose("add account")}
                          >
                            <HiOutlinePlus className="mr-2" />
                            Add Account
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
