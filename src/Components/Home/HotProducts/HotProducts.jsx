import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import { add } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";

const HotProducts = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  if (status === "loading") {
    return (
      <span className="loading loading-dots loading-lg mt-16 text-pink-300"></span>
    );
  }
  if (status === "error") {
    return (
      <span className="mt-48 text-red-700 text-2xl">
        {" "}
        Something not right here
      </span>
    );
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 768 ? 2 : 5,
    slidesToScroll: 1,
  };
  const imageStyle = {
    width: "150px", // Adjust this value as needed
    height: "150px", // Adjust this value as needed
  };
  return (
    <div
      className="popular-products p-3 mx-auto text-center mb-5  cursor-pointer pc-width"
      
    >
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className="border p-2">
            <div className="product-card flex flex-col items-center relative">
              <div className="hot-tag absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-tl-lg">
                Hot
              </div>
              <img
                src={product.product.image}
                alt={product.product.title}
                style={imageStyle}
                className="object-scale-down"
              />
              <h3 className="text-orange-500">{product.product.title}</h3>
              <p>Category: {product.product.category}</p>
              <p>Price: ${product.product.price}</p>
              <div className="flex gap-3 items-center">
                <button
                  className="btn btn-outline btn-sm mt-3"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline btn-sm mt-3"
                >
                  <BsEye />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotProducts;
