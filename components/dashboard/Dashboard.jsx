import { useState } from "react";
import Link from "next/link";
import {
  FiHome,
  FiPlusSquare,
  FiList,
  FiUser,
  FiTrendingUp,
  FiMenu,
} from "react-icons/fi";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:flex-col md:w-64 bg-white shadow-lg`}
      >
        <div className="p-4 text-xl font-bold text-indigo-600">
          {" "}
          Sales Dashboard
        </div>
        <nav className="flex flex-col gap-4 mt-6">
          <Link legacyBehavior href="/dashboard">
            <a
              className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                activeTab === "overview"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600"
              }`}
            >
              <FiHome className="mr-3" /> Overview
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard/add-product">
            <a
              className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                activeTab === "addProduct"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600"
              }`}
            >
              <FiPlusSquare className="mr-3" /> Add Product
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard/all-products">
            <a
              className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                activeTab === "allProducts"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600"
              }`}
            >
              <FiList className="mr-3" /> All Products
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard/orders">
            <a
              className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                activeTab === "orders"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600"
              }`}
            >
              <FiTrendingUp className="mr-3" /> Orders
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard/profile">
            <a
              className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                activeTab === "profile"
                  ? "bg-indigo-100 text-indigo-600"
                  : "text-gray-600"
              }`}
            >
              <FiUser className="mr-3" /> Admin Profile
            </a>
          </Link>
        </nav>
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar (for small screens) */}
        <div className="flex items-center justify-between p-4 bg-white shadow md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl text-indigo-600"
          >
            <FiMenu />
          </button>
          <h1 className="text-xl font-bold text-indigo-600">Dashboard</h1>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Sales</h3>
              <p className="text-2xl font-semibold text-indigo-600">$12,345</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">Total Orders</h3>
              <p className="text-2xl font-semibold text-indigo-600">345</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-600">New Customers</h3>
              <p className="text-2xl font-semibold text-indigo-600">23</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
