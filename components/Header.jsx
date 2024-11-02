"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-600 hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-indigo-600"
          >
            Services
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-indigo-600 flex items-center"
            >
              Pages
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 z-50 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-40">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Blog
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-indigo-600"
          >
            Dashboard
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 absolute w-full flex flex-col items-center z-20 ">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Services
          </Link>
          <button
            onClick={toggleDropdown}
            className="block w-full  sm:text-left px-4 py-2 text-gray-600 hover:bg-gray-100 "
          >
            Pages
          </button>
          {isDropdownOpen && (
            <div className="px-4 bg-slate-500 sm:bg-transparent w-full py-4">
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Blog
              </Link>
            </div>
          )}
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Dashboard
          </Link>
        </nav>
      )}
    </header>
  );
};

export default ResponsiveHeader;
