"use client";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import butterfly from "../public/images/butterfly.png";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/app/contextApi/contextProvider";
import Link from "next/link";
const Header = () => {
  const { drawer, drawerFnc, setNavDropdown, navDropdown } =
    useContext(AppContext);

  return (
    <div className="bg-gray-200 w-full ">
      <div className="container mx-auto px-8 md:px-0 ">
        <div className="flex justify-between items-center py-4 px-2   ">
          {/* logo */}
          <div>
            <h3>logo</h3>
          </div>
          {/* responsive menu */}
          <div
            className="visible place-self-end md:hidden hover:cursor-pointer"
            onClick={() => drawerFnc()}
          >
            {!drawer ? <RiMenu3Line size={22} /> : <RxCross2 size={24} />}
          </div>
          {/* sidebar */}

          <div
            className={` md:flex md:justify-between md:items-center   md:gap-3 hidden md:visible md:bg-transparent   `}
          >
            <ul className="link my-2">Home</ul>
            <ul className="link my-2">Services</ul>

            {/* Dropdown Container */}
            <div className=" relative">
              <ul
                onClick={() => setNavDropdown(!navDropdown)}
                className="link cursor-pointer flex items-center"
              >
                Pages{" "}
                <svg
                  className={`ml-1 w-4 h-4 text-gray-600 transition-transform duration-200 ${
                    navDropdown ? "rotate-180" : ""
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
              </ul>
              {/* Dropdown Menu */}
              <div
                className={`absolute  left-0 top-6 z-20 ${
                  navDropdown ? "block" : "hidden"
                }`}
              >
                <ul
                  onClick={() => setNavDropdown(false)}
                  className=" bg-white w-full px-8 py-5 rounded-lg shadow-lg "
                >
                  <li className="hover:text-indigo-500">
                    <Link href="/all-products"> Products</Link>
                  </li>
                  <li className="hover:text-indigo-500">
                    <Link href="/admin-dashboard">Dashboard</Link>
                  </li>
                  <li className="hover:text-indigo-500">
                    <Link href="/">Blog Post</Link>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="link my-2">Profile</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
