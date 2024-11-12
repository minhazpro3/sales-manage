import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const ConfirmPopup = ({
  message,
  onConfirm,
  onCancel,
  isOpen,
  deleteProduct,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto text-center transform transition-all duration-300 animate-popup">
        <div className="flex flex-col items-center">
          {/* Warning Icon */}
          <FiAlertTriangle className="text-red-600 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {message}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">
          This action is permanent and cannot be undone. Are you sure you want
          to proceed?
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={deleteProduct}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-400 shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
