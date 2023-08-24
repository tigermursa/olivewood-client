import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import Axios
import Loader from "../Loader/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProduct = () => {
      axios
        .get(`https://my-json-server-tigermursa.vercel.app/products/${id}`)
        .then((response) => {
          if (response.status === 200) {
            setProduct(response.data); // Assuming data is an object representing the product
            setLoading(false); // Data fetched, loading is done
          } else {
            console.error("Failed to fetch product data");
            setLoading(false); // Loading should still be set to false in case of an error
          }
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
          setLoading(false); // Loading should be set to false in case of an error
        });
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 gap-4 md:w-3/4 mx-auto">
      <div className="md:w-1/2">
        <div className="w-64 h-64 md:w-full md:h-full overflow-hidden">
          <img
            src={product.product.image}
            alt={product.product.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-semibold mb-2">{product.product.title}</h2>
        <p className="text-gray-500 mb-2">{product.product.category}</p>
        <p className="text-green-600 font-semibold text-lg mb-4">
          ${product.product.price.toFixed(2)}
        </p>
        <p className="text-gray-700 mb-2">{product.product.size}</p>
        <p className="text-gray-700 mb-4">{product.product.description}</p>
        <button className="btn btn-outline btn-sm mt-3">Add to cart</button>
        <button className="btn btn-outline btn-sm mt-3 ms-3">
          Add to favourite
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
