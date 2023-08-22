import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HotProductCard from "./HotProductCard";

const HotProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.filter(product => product.id >= 5 && product.id <= 15)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of products shown
    slidesToScroll: 1,
  };

  return (
    <div className="popular-products p-3 mx-auto text-center mb-5  cursor-pointer" style={{ width: "1280px" }}>
      <h2 className="text-3xl font-extrabold mb-6">Hot Products</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="border p-2">
            <HotProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotProducts;
