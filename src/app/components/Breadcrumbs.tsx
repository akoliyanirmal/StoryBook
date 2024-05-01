import React from "react";
import { FaAngleRight } from "react-icons/fa";

export interface BreadcrumbItem {
  label: string;
}

export interface BasicBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BasicBreadcrumbs: React.FC<BasicBreadcrumbsProps> = ({ items }) => {
  return (
    <nav>
      <div className="flex space-x-2">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="border-b border-gray-300 pb-1 mx-2" />
            )}
            <li className="flex items-center">
              <button className="text-black-500 hover:underline focus:underline cursor-pointer">
                {item.label}
              </button>
              {index !== items.length - 1 && (
                <FaAngleRight className="w-4 h-4 mx-2" />
              )}
            </li>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default BasicBreadcrumbs;
