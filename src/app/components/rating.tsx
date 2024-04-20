import React, { useState } from "react";
import { FiStar } from "react-icons/fi";

export interface RatingProps {
  totalStars: number;
}

const Rating: React.FC<RatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleStarClick = (starIndex: number) => {
    setRating((prevRating) =>
      prevRating === starIndex + 1 ? null : starIndex + 1
    );
  };

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex + 1);
  };

  const handleStarHoverLeave = () => {
    setHoverRating(null);
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const isActive = rating !== null && index < rating;
        const isHovered = hoverRating !== null && index < hoverRating;
        return (
          <FiStar
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarHoverLeave}
            className={`cursor-pointer w-6 h-6 inline-block fill-current transition duration-200 ${
              isActive || isHovered ? "text-yellow-500" : "text-gray-500"
            }`}
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
