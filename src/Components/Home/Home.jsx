import React from "react";

import BigCarousel from "./Carousel/BigCarousel";
import TopBrands from "./TopBrands/TopBrands";
import PopularProducts from "./PopularProducts/PopularProducts";
import HotProducts from "./HotProducts/HotProducts";

const Home = () => {
  return (
    <div>
      <BigCarousel />
      <TopBrands />
      <PopularProducts />
      <HotProducts />
    </div>
  );
};

export default Home;
