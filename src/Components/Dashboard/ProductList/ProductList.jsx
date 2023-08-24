import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";

const ProductList = () => {
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

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.product.image} alt={product.product.title} className="w-24 h-24" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.product.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">${product.product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ProductList;
