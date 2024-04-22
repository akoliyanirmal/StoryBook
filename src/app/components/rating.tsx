import React, { useState } from "react";
import { FiStar } from "react-icons/fi";

export interface RatingProps {
  totalStars: number;
  size?: "small" | "medium" | "large";

  //! HTML PROPS
  //* emptyIcon?: React.ReactNode;
  //* emptyLabelText?: string;
  //* getLabelText?: (value: number) => string;
  //* highlightSelectedOnly?: boolean;
  //* icon?: React.ReactNode;
  //* IconContainerComponent?: React.ElementType;
  //* max?: number;
  //* name?: string;
  //* onChangeActive?: (value: number) => void;
  //* precision?: number;
  //* readOnly?: boolean;
  //* sx?: React.CSSProperties;
  //* value?: number;
}

const Rating: React.FC<RatingProps> = ({
  totalStars,
  size = "medium",
  //* ADDITIONAL PROPS
  ...props
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleStarClick = (starIndex: number) => {
    const newValue = rating === starIndex + 1 ? null : starIndex + 1;
    setRating(newValue);
  };

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex + 1);
  };

  const handleStarHoverLeave = () => {
    setHoverRating(null);
  };

  const getStarSize = () => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "large":
        return "w-8 h-8";
      default:
        return "w-6 h-6";
    }
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
            className={`cursor-pointer inline-block fill-current transition duration-200 ${
              isActive || isHovered ? "text-yellow-500" : "text-gray-300"
            } ${getStarSize()}`}
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              //* Spread all additional props
              ...props,
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
