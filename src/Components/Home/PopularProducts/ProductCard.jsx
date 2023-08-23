import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const imageStyle = {
    width: "150px", // Adjust this value as needed
    height: "150px", // Adjust this value as needed
  };

  return (
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
      <button className="btn btn-outline btn-sm mt-3">Add to cart</button>
      <Link
        to={`/products/${product.id}`}
        className="btn btn-outline btn-sm mt-3"
      >
        view details
      </Link>
    </div>
  );
};

export default ProductCard;
