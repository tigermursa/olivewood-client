import React from "react";

const HotProductCard = ({ product }) => {
  const imageStyle = {
    width: "150px", // Adjust this value as needed
    height: "150px", // Adjust this value as needed
  };

  return (
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
      <button className="btn btn-outline btn-sm mt-3">Add to cart</button>
    </div>
  );
};

export default HotProductCard;
