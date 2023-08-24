import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../../../../public/spacejoy-2d1k_A-nrY8-unsplash (1).jpg";

const ParallaxImage = () => {
  return (
    <div style={{ width: "1280px" }} className="mx-auto">
      <Parallax bgImage={image1} strength={800}>
        <div style={{ height: 300 }}>
          {" "}
          {/* Adjust the height as needed */}
          {/* Your content here */}
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxImage;
