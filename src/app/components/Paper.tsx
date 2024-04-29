import React from "react";

export interface PaperProps {
  title: React.ReactNode;
}

const Paper: React.FC<PaperProps> = ({ title }) => {
  return (
    <>
      <div className="bg-white w-56 h-64 rounded-md shadow-lg p-4 flex">
        {title}
      </div>
    </>
  );
};
export default Paper;
