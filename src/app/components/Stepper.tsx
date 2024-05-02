import React from "react";

const Stepper = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
            1
          </div>
          <div className="ml-2">Select campaign settings</div>
        </div>
        <div className="h-1 w-16 bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
            2
          </div>
          <div className="ml-2">Create an ad group</div>
        </div>
        <div className="h-1 w-16 bg-gray-300"></div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
            3
          </div>
          <div className="ml-2">Create an ad</div>
        </div>
      </div>
      <div className="flex justify-between mt-60">
        <button className="bg-gray-300 px-4 py-2 rounded-md">Back</button>
        <button className="bg-gray-300 px-4 py-2 rounded-md mr-2">Skip</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
