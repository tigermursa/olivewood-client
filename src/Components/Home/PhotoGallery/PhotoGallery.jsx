import React from "react";
import Gallery from "react-photo-gallery";


const photos = [
  {
    src: "https://images.unsplash.com/photo-1632119289059-793dd347950f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    width: 4,
    height: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1632119289059-793dd347950f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    width: 4,
    height: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    width: 4,
    height: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1631510390389-c1e4fb20ff31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
    width: 4,
    height: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1632830196000-d8a1abf32691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    width: 4,
    height: 3,
  },
];

const PhotoGallery = () => {
  return (
    <div className="my-gallery mt-10 mb-10">
      <Gallery photos={photos} />
    </div>
  );
};

export default PhotoGallery;
