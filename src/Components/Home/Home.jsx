import React from "react";

import BigCarousel from "./Carousel/BigCarousel";
import TopBrands from "./TopBrands/TopBrands";
import PopularProducts from "./PopularProducts/PopularProducts";
import HotProducts from "./HotProducts/HotProducts";
import ParallaxImage from "./ParallaxImage/ParallaxImage";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import WinterSale from "./WinterSale/WinterSale";

const Home = () => {
  return (
    <div>
      <BigCarousel />
      <WinterSale />
      <TopBrands />
      <PopularProducts />
      <ParallaxImage />
      <h2 className="text-3xl font-extrabold mb-6 flex justify-center mt-10">Hot Products</h2>
      <HotProducts />
      <PhotoGallery />
    </div>
  );
};

export default Home;
