"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import {
  FiHome,
  FiPlusSquare,
  FiList,
  FiUser,
  FiTrendingUp,
  FiMenu,
} from "react-icons/fi";
import { AppContext } from "../contextApi/contextProvider";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  // const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { activeTab, setActiveTab } = useContext(AppContext);
  const pathname = usePathname();

  // Check if the current route is "bla bla bla"
  const isDashboard = pathname === "/dashboard";
  const isAddProductRoute = pathname === "/dashboard/add-product";
  console.log(pathname);
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
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
                  isDashboard
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
                  isAddProductRoute
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiPlusSquare className="mr-3" /> Add Product
              </a>
            </Link>
            {/* <Link legacyBehavior href="/dashboard/all-products">
              <a
                className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                  activeTab === "allProducts"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiList className="mr-3" /> All Products
              </a>
            </Link> */}
            {/* <Link legacyBehavior href="/dashboard/orders">
              <a
                className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                  activeTab === "orders"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiTrendingUp className="mr-3" /> Orders
              </a>
            </Link> */}
            {/* <Link legacyBehavior href="/dashboard/profile">
              <a
                className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                  activeTab === "profile"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiUser className="mr-3" /> Admin Profile
              </a>
            </Link> */}
          </nav>
        </aside>

        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
