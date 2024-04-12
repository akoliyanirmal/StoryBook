import React from "react";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "medium" }) => {
  const sizeStyles = {
    small: { width: "200px", height: "200px" },
    medium: { width: "300px", height: "300px" },
    large: { width: "400px", height: "400px" },
  };

  return (
    <img
      src={src}
      alt={alt}
      style={sizeStyles[size]}
      className="rounded-full"
    />
  );
};

export default Avatar;
