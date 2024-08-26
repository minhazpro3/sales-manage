"use client";
import React, { useState } from "react";

const AddProductModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="relative">
      <div className="  absolute items-center justify-center w-full bg-black bg-opacity-50 backdrop-blur-sm z-50  ">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full my-4  mx-4">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Add Product
              </h2>
              <button
                //   onClick={onClose}
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* add product input fields */}
            <div className="space-y-4   ">
              {/* 1st section */}
              <div className="md:flex justify-center items-center gap-3 ">
                <div className="w-full">
                  <label className="block text-gray-700 font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600"
                    placeholder="Product Name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 font-medium">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600"
                    placeholder="Product Title"
                  />
                </div>
              </div>
              {/* 2nd section */}
              <div className="md:flex justify-center items-center gap-3 ">
                <div className="w-full">
                  <label className="block text-gray-700 font-medium">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600">
                    <option value="" disabled selected>
                      Select Category
                    </option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home-appliances">Home Appliances</option>
                    <option value="books">Books</option>
                    <option value="toys">Toys</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 font-medium">
                    MRP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600"
                    placeholder="MRP"
                  />
                </div>
              </div>

              {/* 3rd section */}
              <div className="md:flex justify-center items-center gap-3 ">
                <div className="w-full">
                  <label className="block text-gray-700 font-medium">
                    TP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600"
                    placeholder="TP"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 font-medium">
                    MRP Less (%) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600"
                    placeholder="Percentage"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Stock <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full px-4 py-2 border rounded-lg text-gray-800 border-gray-300 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Stock Quantity"
                />
              </div>
            </div>

            {/* submit and cancel buttons */}
            <div className="mt-6 flex justify-between space-x-3">
              <span className="text-red-500">
                N.B: Fields marked with (*) must be filled.
              </span>
              <div className="md:flex items-center gap-2 ">
                <button
                  //   onClick={onClose}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
                <button className="px-4 my-2 md:my-0 py-2 text-sm md:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
