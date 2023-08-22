import React from "react";

import BigCarousel from "./Carousel/BigCarousel";
import TopBrands from "./TopBrands/TopBrands";
import PopularProducts from "./PopularProducts/PopularProducts";
import HotProducts from "./HotProducts/HotProducts";
import ParallaxImage from "./ParallaxImage/ParallaxImage";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <BigCarousel />
      <TopBrands />
      <PopularProducts />
      <ParallaxImage />
      <HotProducts />
      <PhotoGallery />
    </div>
  );
};

export default Home;
