import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

interface BottomNavigationProps {
  recentsLabel: string;
  favoriteLabel: string;
  nearbyLabel: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  recentsLabel,
  favoriteLabel,
  nearbyLabel,
}) => {
  const [activeIcon, setActiveIcon] = useState<
    "recents" | "favorite" | "nearby"
  >("recents");

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center py-2">
        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === "recents" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveIcon("recents")}
        >
          <FaHistory className="text-xl" />
          <span className="text-sm">{recentsLabel}</span>
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === "favorite" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveIcon("favorite")}
        >
          <MdOutlineFavorite className="text-xl" />
          <span className="text-sm">{favoriteLabel}</span>
        </div>

        <div
          className={`flex flex-col items-center cursor-pointer ${
            activeIcon === "nearby" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveIcon("nearby")}
        >
          <FaLocationDot className="text-xl" />
          <span className="text-sm">{nearbyLabel}</span>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
