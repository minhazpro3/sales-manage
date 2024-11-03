"use client";
import { useState } from "react";
import { FiEye, FiX, FiEdit3 } from "react-icons/fi";

const OrderPage = () => {
  // Sample data for orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      date: "2024-11-01",
      status: "Pending",
      total: "$250",
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2024-10-31",
      status: "Shipped",
      total: "$150",
    },
    {
      id: 3,
      customer: "Chris Evans",
      date: "2024-10-30",
      status: "Delivered",
      total: "$300",
    },
    {
      id: 4,
      customer: "Emma Johnson",
      date: "2024-10-29",
      status: "Canceled",
      total: "$50",
    },
    // Add more orders as needed
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showOrderDetails, setShowOrderDetails] = useState(null);
  const itemsPerPage = 3;

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredOrders = orders
    .filter((order) => statusFilter === "All" || order.status === statusFilter)
    .filter((order) => order.id.toString().includes(searchQuery));
  const displayedOrders = filteredOrders.slice(startIndex, endIndex);

  // Select or unselect all orders
  const toggleSelectAll = () => {
    if (selectedOrders.length === displayedOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(displayedOrders.map((order) => order.id));
    }
  };

  // Select individual order
  const toggleSelectOrder = (id) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((orderId) => orderId !== id)
        : [...prevSelected, id]
    );
  };

  // Cancel selected orders
  const handleCancelOrders = () => {
    setOrders(
      orders.map((order) =>
        selectedOrders.includes(order.id)
          ? { ...order, status: "Canceled" }
          : order
      )
    );
    setSelectedOrders([]);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Orders</h1>

      {/* Filters and Search */}
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search by Order ID..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Canceled">Canceled</option>
        </select>
        <button
          onClick={handleCancelOrders}
          disabled={!selectedOrders.length}
          className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 ${
            !selectedOrders.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Cancel Selected
        </button>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={selectedOrders.length === displayedOrders.length}
                />
              </th>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => toggleSelectOrder(order.id)}
                  />
                </td>
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-sm rounded-md ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-600"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4">{order.total}</td>
                <td className="p-4 flex items-center gap-2">
                  <button
                    onClick={() => setShowOrderDetails(order)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <FiEye />
                  </button>
                  <button
                    onClick={() =>
                      setOrders(
                        orders.map((o) =>
                          o.id === order.id ? { ...o, status: "Canceled" } : o
                        )
                      )
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    <FiX />
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
              prev < Math.ceil(filteredOrders.length / itemsPerPage)
                ? prev + 1
                : prev
            )
          }
          disabled={
            currentPage === Math.ceil(filteredOrders.length / itemsPerPage)
          }
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Order Details Modal */}
      {showOrderDetails && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <p>
              <strong>Order ID:</strong> {showOrderDetails.id}
            </p>
            <p>
              <strong>Customer:</strong> {showOrderDetails.customer}
            </p>
            <p>
              <strong>Date:</strong> {showOrderDetails.date}
            </p>
            <p>
              <strong>Status:</strong> {showOrderDetails.status}
            </p>
            <p>
              <strong>Total:</strong> {showOrderDetails.total}
            </p>
            <button
              onClick={() => setShowOrderDetails(null)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
