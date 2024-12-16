"use client";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiHome,
  FiPlusSquare,
  FiList,
  FiUser,
  FiTrendingUp,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AppContext } from "../contextApi/contextProvider";
import { usePathname } from "next/navigation";
import ResponsiveHeader from "@/components/Header";

const Layout = ({ children }) => {
  const router = useRouter();
  // const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { activeTab, setActiveTab, token, setToken } = useContext(AppContext);
  console.log("tokennnnnnnnnnnnnnnn:", token);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // if (!token) {
  //   router.push("/login");
  //   return null;
  // }

  return (
    <div>
      <div className="flex items-start md:items-start">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 text-gray-600 focus:outline-none top-0"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed left-0 transform   ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full "
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 max-h-lvh z-40 h-screen bg-white md:w-2/12   `}
        >
          <div className="p-4 text-xl font-bold text-indigo-600">
            Sales Dashboard
          </div>
          <nav className="flex flex-col gap-4 mt-6">
            <Link legacyBehavior href="/dashboard">
              <a
                className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                  pathname === "/dashboard"
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
                  pathname === "/dashboard/add-product"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiPlusSquare className="mr-3" /> Add Product
              </a>
            </Link>
            <Link legacyBehavior href="/dashboard/our-products">
              <a
                className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                  pathname === "/dashboard/our-products"
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
                  pathname === "/dashboard/orders"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiTrendingUp className="mr-3" /> Orders
              </a>
            </Link>
            <Link legacyBehavior href="/dashboard/admin-profile">
              <a
                className={`flex items-center px-4 py-2 hover:bg-indigo-100 ${
                  pathname === "/dashboard/admin-profile"
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600"
                }`}
              >
                <FiUser className="mr-3" /> Admin Profile
              </a>
            </Link>
          </nav>
        </aside>

        {/* Overlay for Sidebar on Mobile */}
        {sidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          />
        )}

        {/* Main Content */}
        <main className="flex-1   md:p-0 md:w-10/12 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
