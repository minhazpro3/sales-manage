"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // generate & upload product image URL
  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    const formData = new FormData();
    formData.set("key", "d45a4ad9a09ad1464075aa3c82125b64");
    formData.append("image", e.target.files[0]);
    // image upload promise

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        if (res.data) {
          alert("image uploaded");
          setImage(res.data.data.url);
        }
      })
      .catch((error) => {});
    // show image on time
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    alert("Product added successfully!");
    const productData = {
      name: data.productName,
      category: data.category,
      description: data.description,
      price: data.price,
      stock: data.stock,
      image: image,
    };
    // Logic for form submission, e.g., send data to API
    try {
      // Send a POST request to the backend API
      const response = await axios.post(
        `http://localhost:5000/api/v1/product`,
        productData,
        {
          headers: {
            "Content-Type": "application/json", // Adjust this based on your backend handling
          },
        }
      );

      // Check for successful response
      if (response.status === 200) {
        console.log("Product added:", response.data);
        alert("Product added successfully!");
      } else {
        console.error("Error adding product:", response);
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error submitting product data:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add Product</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        {/* Product Name */}
        <div>
          <label className="block text-gray-600 mb-2">Product Name</label>
          <input
            type="text"
            {...register("productName", {
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
          {errors.productName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.productName.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-600 mb-2">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              maxLength: {
                value: 500,
                message: "Use maximum length 500",
              },
              minLength: {
                value: 50,
                message: "Use minimum length 50",
              },
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-600 mb-2">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="toys">Toys</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-2">Price ($)</label>
          <input
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
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block text-gray-600 mb-2">Stock Quantity</label>
          <input
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
          {errors.stock && (
            <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-600 mb-2">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required={true}
          />
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md shadow-md"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        {image == null ? (
          <button
            disabled
            type="submit"
            className="w-full bg-indigo-300 text-white py-2 rounded-md hover:bg-indigo-400 transition duration-300"
          >
            Add Product
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Add Product
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProductModal;
