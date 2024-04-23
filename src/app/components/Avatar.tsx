import React from "react";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "rounded" | "square";
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  variant = "circular",
}) => {
  let sizeClass = "";
  switch (size) {
    case "small":
      sizeClass = "h-8 w-8";
      break;
    case "medium":
      sizeClass = "h-10 w-10";
      break;
    case "large":
      sizeClass = "h-12 w-12";
      break;
  }

  let variantClass = "";
  switch (variant) {
    case "circular":
      variantClass = "rounded-full";
      break;
    case "rounded":
      variantClass = "rounded-md";
      break;
    case "square":
      variantClass = "rounded-none";
      break;
  }

  return <img className={`${variantClass} ${sizeClass}`} src={src} alt={alt} />;
};

export default Avatar;
