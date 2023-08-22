import React from "react";

import BigCarousel from "./Carousel/BigCarousel";
import TopBrands from "./TopBrands/TopBrands";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <BigCarousel />
      <TopBrands />
      <PopularProducts />
    </div>
  );
};

export default Home;
