import React from "react";

export interface ImageListProps {
  images: string[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="w-full h-auto"
        />
      ))}
    </div>
  );
};

export default ImageList;
