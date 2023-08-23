import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://my-json-server-tigermursa.vercel.app/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data); // Assuming data is an object representing the product
        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.product.title}</h2>
      <p>{product.product.description}</p>
      <img src={product.product.image} alt={product.product.title} />
    </div>
  );
};

export default ProductDetail;
