import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
console.log(products);
  useEffect(() => {
    fetch("https://my-json-server-tigermursa.vercel.app/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
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
    <div
      className="popular-products p-3 mx-auto text-center mt-20 mb-20 cursor-pointer "
      style={{ width: "1280px" }}
    >
      <h2 className="text-3xl font-extrabold mb-6">Popular Products</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="border p-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularProducts;
