"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { FiEdit, FiTrash } from "react-icons/fi";
import axios from "axios";
import { AppContext } from "@/app/contextApi/contextProvider";
import Image from "next/image";

const OurProducts = () => {
  // all products
  const { products, setProducts } = useContext(AppContext);

  console.log("products", products);
  const [productsData, setProductsData] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const itemsPerPage = 10;
  // get all products
  const getProduct = async () => {
    try {
      const products = await axios.get(
        `http://localhost:5000/api/v1/product?page=${currentPage}&limit=${itemsPerPage}`
      );
      setProducts(products.data.products);
      setProductsData(products.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct(currentPage);
  }, [currentPage]);

  // handle pagination
  // 1
  function handlePrev() {
    setCurrentPage((p) => {
      if (p === 0) {
        return p;
      }
      return p - 1;
    });
  }

  // 2

  function handleNext() {
    if (currentPage < productsData.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  // delete all products
  const deleteProduct = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/product/${id}`
      );
      if (response.status == 200) {
        setProducts((prevProduct) =>
          prevProduct.filter((product) => product._id !== id)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
  // const handleDelete = () => {
  //   setProducts(
  //     products.filter((product) => !selectedProducts.includes(product.id))
  //   );
  //   setSelectedProducts([]);
  // };
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
          // onClick={handleDelete}
          // disabled={!selectedProducts.length}
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
                  // checked={selectedProducts.length === displayedProducts.length}
                />
              </th>
              <th className="p-4 text-left">Product Image</th>
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleSelectProduct(product.id)}
                  />
                </td>
                <td className="p-4">
                  <div className="relative w-[50px] h-[50px] ">
                    {" "}
                    <Image src={product.image} alt="dairy milk" fill />
                  </div>
                </td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4 flex items-center gap-2">
                  <Link
                    legacyBehavior
                    href={`/dashboard/edit-product/${product._id}`}
                  >
                    <a className="text-indigo-600 hover:text-indigo-800">
                      <FiEdit />
                    </a>
                  </Link>
                  <button
                    // onClick={() =>
                    //   setProducts(products.filter((p) => p._id !== product._id))
                    // }
                    onClick={() => deleteProduct(product._id)}
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
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage}/{productsData.totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === productsData.totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
