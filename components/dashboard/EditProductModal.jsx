import axios from "axios";
import React, { useState } from "react";

const EditProductModal = ({
  isOpen,
  updateID,
  openModal,
  register,
  handleSubmit,
  reset,
  getProduct,
}) => {
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/product/${updateID._id}`,
        data
      );
      if (response.status === 200) {
        reset();
        openModal("close");
        getProduct();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-2">
            <span className="text-gray-700">Product Name</span>
            <input
              defaultValue={updateID.name}
              placeholder={updateID.name}
              type="text"
              {...register("name", {
                required: "Product name is required",
                maxLength: {
                  value: 150,
                  message: "Use maximum length 150",
                },
                minLength: {
                  value: 10,
                  message: "Use minimum length 10",
                },
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Price</span>
            <input
              defaultValue={updateID.price}
              placeholder={updateID.price}
              type="number"
              {...register("price", {
                required: "Price is required",
                min: {
                  value: 0,
                  message: "Use Positive value",
                },
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Stock</span>
            <input
              defaultValue={updateID.stock}
              placeholder={updateID.stock}
              type="number"
              {...register("stock", {
                required: "Stock quantity is required",
                min: {
                  value: 0,
                  message: "Use Positive value",
                },
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => openModal("close")}
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
