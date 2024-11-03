import { useState } from "react";
import Link from "next/link";
import { Line } from "react-chartjs-2";
import {
  FiTrendingUp,
  FiShoppingBag,
  FiUser,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";
import "chart.js/auto";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const pathname = usePathname();
  const isAddProductRoute = pathname === "/dashboard/add-product";
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Chart data
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className=" ">
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h1>

        {/* KPIs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-gray-600">Total Sales</h2>
              <p className="text-2xl font-bold text-indigo-600">$20,500</p>
            </div>
            <FiTrendingUp className="text-4xl text-indigo-500" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-gray-600">Total Products</h2>
              <p className="text-2xl font-bold text-indigo-600">350</p>
            </div>
            <FiShoppingBag className="text-4xl text-indigo-500" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-gray-600">New Orders</h2>
              <p className="text-2xl font-bold text-indigo-600">75</p>
            </div>
            <FiArrowUpRight className="text-4xl text-indigo-500" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-gray-600">Admin Activity</h2>
              <p className="text-2xl font-bold text-indigo-600">15</p>
            </div>
            <FiActivity className="text-4xl text-indigo-500" />
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Sales Trend
          </h3>
          <Line data={salesData} />
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Orders
          </h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 text-gray-600">Order ID</th>
                <th className="py-2 text-gray-600">Customer</th>
                <th className="py-2 text-gray-600">Amount</th>
                <th className="py-2 text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">#1234</td>
                <td className="py-2">John Doe</td>
                <td className="py-2">$120</td>
                <td className="py-2 text-green-500">Completed</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">#1235</td>
                <td className="py-2">Jane Smith</td>
                <td className="py-2">$75</td>
                <td className="py-2 text-yellow-500">Pending</td>
              </tr>
              <tr className="border-t">
                <td className="py-2">#1236</td>
                <td className="py-2">Tom Brown</td>
                <td className="py-2">$250</td>
                <td className="py-2 text-red-500">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Activity Log */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activities
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600">✔️ Product #456 added by Admin</li>
            <li className="text-gray-600">
              ✔️ Order #1234 completed by John Doe
            </li>
            <li className="text-gray-600">
              ✔️ New discount applied to Product #789
            </li>
            <li className="text-gray-600">
              ✔️ User Jane Smith updated profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
