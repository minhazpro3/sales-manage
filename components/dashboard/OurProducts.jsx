"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiEdit,
  FiTrash,
} from "react-icons/fi";
import axios from "axios";
import { AppContext } from "@/app/contextApi/contextProvider";
import Image from "next/image";
import EditProductModal from "./EditProductModal";
import { useForm } from "react-hook-form";
import ConfirmPopup from "../common/ConfirmPopup";

const OurProducts = () => {
  // all products
  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [updateID, setUpdateID] = useState({});
  const [productsData, setProductsData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { register, handleSubmit, reset } = useForm();
  const [selectedProducts, setSelectedProducts] = useState([]);
  // confirm popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const itemsPerPage = 10;
  // get all products
  const getProduct = async () => {
    setLoading(true);
    try {
      const products = await axios.get(
        `https://duco-sales.vercel.app/api/v1/product?page=${currentPage}&limit=${itemsPerPage}`
      );
      setProducts(products.data.products);
      setProductsData(products.data);
      setLoading(false);
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
  //custom confirm delete
  const handleConfirm = (id) => {
    setIsPopupOpen(true);
    setPendingDeleteId(id);
  };
  const handleCancel = () => setIsPopupOpen(!isPopupOpen);
  // delete a products
  const deleteProduct = async () => {
    if (pendingDeleteId) {
      try {
        const response = await axios.delete(
          `https://duco-sales.vercel.app/api/v1/product/${pendingDeleteId}`
        );
        if (response.status == 200) {
          setProducts((prevProduct) =>
            prevProduct.filter((product) => product._id !== pendingDeleteId)
          );
          setIsPopupOpen(false);
          setPendingDeleteId(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  // filter by search
  const handleSearch = async (e) => {
    const search = e.target.value;

    if (search) {
      try {
        const response = await axios.get(
          `https://duco-sales.vercel.app/api/v1/search?name=${search}`
        );

        setProducts(response.data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      getProduct();
    }
  };

  // edit modal open
  const openModal = async (product) => {
    if (product._id) {
      setModalOpen(true);
      setUpdateID(product);
    } else {
      setModalOpen(false);
      setUpdateID({});
      reset();
    }
  };
  // Select all products
  const toggleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product._id));
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

  // bulk delete product confirm
  // const bulkDelete = ()=>{

  // }
  //bulk Delete selected products
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://duco-sales.vercel.app/api/v1/product/bulk-delete`,
        {
          data: {
            id: { selectedProducts },
          },
        }
      );

      if (response.data.acknowledged) {
        getProduct();
        setSelectedProducts([]);
      }
    } catch (error) {}
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
          onChange={handleSearch}
          placeholder="Search products..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <span className={`${selectedProducts.length > 0 && "text-red-700"}`}>
          Selected {selectedProducts.length}
        </span>
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
        {loading ? (
          <Skeleton height={50} count={6} />
        ) : (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    onChange={toggleSelectAll}
                    checked={selectedProducts.length === products.length}
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
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product._id)}
                      onChange={() => toggleSelectProduct(product._id)}
                    />
                  </td>
                  <td className="p-4">
                    <div className="relative w-[50px] h-[50px] ">
                      {" "}
                      <Image src={product?.image} alt="dairy milk" fill />
                    </div>
                  </td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4 flex items-center gap-2">
                    <button
                      onClick={() => openModal(product)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleConfirm(product._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
          Page {currentPage}/{productsData.totalPages}, Products{" "}
          {`${products.length}`}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === productsData.totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* tost test */}
      <ConfirmPopup
        message="Are you sure you want to delete this item?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isOpen={isPopupOpen}
        deleteProduct={deleteProduct}
      />

      <EditProductModal
        isOpen={isModalOpen}
        openModal={openModal}
        updateID={updateID}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        getProduct={getProduct}
      />
    </div>
  );
};

export default OurProducts;
