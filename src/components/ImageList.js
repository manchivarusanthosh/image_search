import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
