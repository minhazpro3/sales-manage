"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Page = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
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

export default Page;
