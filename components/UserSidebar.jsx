import React from "react";
import { IoMdHome } from "react-icons/io";
import { LiaServicestack } from "react-icons/lia";
import { RiPagesFill } from "react-icons/ri";
import { MdRoundaboutRight } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const UserSidebar = ({ drawerFnc, drawer }) => {
  return (
    <div className="container mx-auto px-8 md:px-0 visible md:hidden  ">
      <div className="relative z-20">
        <div
          className={`${
            drawer ? "-left-10 sm:-left-24" : "-left-56 sm:-left-72"
          } w-44 flex justify-center h-screen bg-gray-200 absolute shadow-md rounded-r-lg shadow-gray-600 transition-all duration-500 `}
        >
          <div className="my-6 relative ">
            <ul
              onClick={() => drawerFnc()}
              className=" hover:cursor-pointer  absolute -top-4  -right-5  rounded-md"
            >
              <RxCross2 size={24} />
            </ul>
            <ul className="my-4 hover:bg-slate-50 px-4 py-1 rounded-md flex gap-2 justify-center items-center">
              <IoMdHome size={19} /> Home
            </ul>
            <ul className="my-4 hover:bg-slate-50 px-4 py-1 rounded-md flex gap-2 justify-center items-center">
              <LiaServicestack />
              Services
            </ul>
            <ul className="my-4 hover:bg-slate-50 px-4 py-1 rounded-md flex gap-2 justify-center items-center">
              <RiPagesFill />
              Pages
            </ul>
            <ul className="my-4 hover:bg-slate-50 px-4 py-1 rounded-md flex gap-2 justify-center items-center">
              <MdRoundaboutRight />
              About
            </ul>
            <ul className="my-4 hover:bg-slate-50 px-4 py-1 rounded-md flex gap-2 justify-center items-center">
              <IoMdLogOut />
              Logout
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
