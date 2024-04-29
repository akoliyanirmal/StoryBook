import React, { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md shadow">
      <div
        className="flex justify-between items-center border-b p-4 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <FaLongArrowAltDown
          className={`w-6 h-6 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
