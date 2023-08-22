import React, { useState } from "react";

const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select a Category");
  const categories = ["Modern Furniture", "Classic", "Traditional", "Hybrid"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center justify-between  p-4" style={{ width: "1280px" }}>
      <div className="flex items-center gap-2">
        <div className="relative">
          <select
            className="border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-blue-300 focus:border-blue-300"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option disabled>Select a Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-2 py-1 rounded-md focus:ring focus:ring-blue-300 focus:border-blue-300"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="font-semibold text-sm me-5">
          Customer Service <span className="text-red-500 ms-3"> +088 900 6690</span>
        </div>
        <select className="border border-gray-300 rounded-md px-2 py-1">
          <option value="US"><img src="https://wphix.com/html/blackwood-prv/blackwood/assets/img/icon/flag.png" alt="" /> USA</option>
          <option value="IN">🇮🇳 India</option>
          <option value="BD">🇧🇩 Bangladesh</option>
          <option value="PK">🇵🇰 Pakistan</option>
          <option value="UK">🇬🇧 UK</option>
        </select>
        <select className="border border-gray-300 rounded-md px-2 py-1">
          <option value="USD">$ USD</option>
          <option value="INR">₹ INR</option>
          <option value="BDT">৳ BDT</option>
          <option value="PKR">₨ PKR</option>
          <option value="GBP">£ GBP</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
