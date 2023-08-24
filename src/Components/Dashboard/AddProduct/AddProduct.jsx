import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    // Perform your product addition logic here

    // Display a success toast notification
    toast.success("Product added successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-gray-700 employee-bg text-white">
      {" "}
      <div className="max-w-md mx-auto p-6 ">
        <h1 className="text-2xl font-semibold mb-4">Add a Product</h1>
        <form className="space-y-4" onSubmit={handleAddProduct}>
          <div>
            <label className="block font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="category">
              Category
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="category"
              name="category"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="size">
              Size
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="size"
              name="size"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded-md"
              id="description"
              name="description"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="number"
              id="quantity"
              name="quantity"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="sellerName">
              Seller Name
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="sellerName"
              name="sellerName"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="sellerId">
              Seller ID
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              id="sellerId"
              name="sellerId"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Add Product
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddProduct;
