import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.products);
  
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
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
            {currentProducts.map((product) => (
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
        <div className="mt-4">
          {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-blue-500 hover:text-white`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
};

export default ProductList;
