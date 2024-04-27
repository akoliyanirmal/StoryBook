import React from "react";

export interface SkeletonProps {
  number: number;
}
export default function Skeleton({
  number,
}: SkeletonProps): React.ReactElement {
  return (
    <div className="flex flex-row bg-white shadow-lg border-r-4 w-(20rem) items-center gap-2 p-2 rounded">
      {[...Array(number)].map((_, index) => (
        <div
          key={index}
          className="rounded-full h-10 w-10 bg-gray-300 animate-pulse"
        ></div>
      ))}
      <div className="flex flex-col">
        <div className="h-4 w-full bg-gray-300 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
}
