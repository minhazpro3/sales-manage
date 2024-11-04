"use client";
import { useState } from "react";
import Link from "next/link";

import { FiEdit, FiTrash } from "react-icons/fi";

const OurProducts = () => {
  // Sample data
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "$1200", stock: 10 },
    { id: 2, name: "Smartphone", price: "$800", stock: 25 },
    { id: 3, name: "Headphones", price: "$200", stock: 50 },
    { id: 4, name: "Watch", price: "$250", stock: 15 },
    // Add more products as needed
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  // Select all products
  const toggleSelectAll = () => {
    if (selectedProducts.length === displayedProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(displayedProducts.map((product) => product.id));
    }
  };

  // Toggle select individual product
  const toggleSelectProduct = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  // Delete selected products
  const handleDelete = () => {
    setProducts(
      products.filter((product) => !selectedProducts.includes(product.id))
    );
    setSelectedProducts([]);
  };
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        All Products
      </h1>

      {/* Search bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleDelete}
          disabled={!selectedProducts.length}
          className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 ${
            !selectedProducts.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Delete Selected
        </button>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={selectedProducts.length === displayedProducts.length}
                />
              </th>
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleSelectProduct(product.id)}
                  />
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4 flex items-center gap-2">
                  <Link
                    legacyBehavior
                    href={`/dashboard/edit-product/${product.id}`}
                  >
                    <a className="text-indigo-600 hover:text-indigo-800">
                      <FiEdit />
                    </a>
                  </Link>
                  <button
                    onClick={() =>
                      setProducts(products.filter((p) => p.id !== product.id))
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">Page {currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(products.length / itemsPerPage) ? prev + 1 : prev
            )
          }
          disabled={currentPage === Math.ceil(products.length / itemsPerPage)}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
