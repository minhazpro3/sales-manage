"use client";
import { useState } from "react";
import { FiEdit, FiUser, FiLock, FiBell } from "react-icons/fi";

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("admin@example.com");
  const [phone, setPhone] = useState("+1234567890");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    userRegistrations: false,
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data here (e.g., API call)
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Admin Profile
      </h1>

      {/* Profile Info */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-indigo-600 text-4xl">
            <FiUser />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">{phone}</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="ml-auto text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <FiEdit /> Edit Profile
          </button>
        </div>

        {isEditing && (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
          </form>
        )}
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FiLock /> Change Password
        </h2>
        <form className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              // Handle password update here (e.g., API call)
              setPassword("");
              setConfirmPassword("");
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FiBell /> Notification Settings
        </h2>
        <div className="flex items-center gap-4 mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications.projectUpdates}
              onChange={() =>
                setNotifications((prev) => ({
                  ...prev,
                  projectUpdates: !prev.projectUpdates,
                }))
              }
              className="form-checkbox text-indigo-600"
            />
            Project Updates
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications.userRegistrations}
              onChange={() =>
                setNotifications((prev) => ({
                  ...prev,
                  userRegistrations: !prev.userRegistrations,
                }))
              }
              className="form-checkbox text-indigo-600"
            />
            New User Registrations
          </label>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
        <ul className="mt-4 space-y-3 text-gray-600">
          <li>Updated product details - Nov 2, 2024</li>
          <li>Changed password - Oct 30, 2024</li>
          <li>Added a new product - Oct 28, 2024</li>
          {/* Add more activity logs as needed */}
        </ul>
      </div>

      {/* Manage Projects */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800">Manage Projects</h2>
        <ul className="mt-4 space-y-4">
          {/* Sample projects - replace with dynamic data */}
          <li className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">Project A</h3>
              <p className="text-gray-600 text-sm">Project details...</p>
            </div>
            <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              <FiEdit /> Edit
            </button>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-800">Project B</h3>
              <p className="text-gray-600 text-sm">Project details...</p>
            </div>
            <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              <FiEdit /> Edit
            </button>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </div>
    </div>
  );
};

export default AdminProfile;
