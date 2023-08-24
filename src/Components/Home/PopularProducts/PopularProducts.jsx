import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import { add } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Loader from "../../Loader/Loader";
const PopularProducts = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  if (status === "loading") {
    return <span className="loading loading-dots loading-lg mt-16 text-pink-300"></span>
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

  const imageStyle = {
    width: "150px", // Adjust this value as needed
    height: "150px", // Adjust this value as needed
  };
  const sliderSettings = {
    dots: window.innerWidth <= 768 ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 768 ? 2 : 5,
    slidesToScroll: 1,
  };

  return (
    <div className="popular-products p-3 mx-auto text-center mt-20 mb-20 cursor-pointer pc-width ">
      <h2 className="text-3xl font-extrabold mb-6">Popular Products</h2>
      <Slider {...sliderSettings} className="">
        {products.map((product) => (
          <div key={product.id} className="border p-2">
            <div className="product-card flex flex-col items-center">
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

export default PopularProducts;
