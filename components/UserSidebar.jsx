import React from "react";

const UserSidebar = ({ drawerFnc, drawer }) => {
  return (
    <div className="container mx-auto px-8 md:px-0 visible md:hidden">
      <div className="relative">
        <div
          className={`${
            drawer ? "-left-10 sm:-left-24" : "-left-56 sm:-left-72"
          } w-44 flex justify-center h-screen bg-gray-400 absolute `}
        >
          <div className="my-6 relative ">
            <ul
              onClick={() => drawerFnc()}
              className="  absolute -top-4  -right-5  rounded-md"
            >
              X
            </ul>
            <ul className="my-4 hover:bg-slate-300 focus:bg-stone-500 px-6 py-1 rounded-md">
              Home
            </ul>
            <ul className="my-4 hover:bg-slate-300 focus:bg-stone-500 px-6 py-1 rounded-md">
              Services
            </ul>
            <ul className="my-4 hover:bg-slate-300 focus:bg-stone-500 px-6 py-1 rounded-md">
              Pages
            </ul>
            <ul className="my-4 hover:bg-slate-300 focus:bg-stone-500 px-6 py-1 rounded-md">
              About
            </ul>
            <ul className="my-4 hover:bg-slate-300 focus:bg-stone-500 px-6 py-1 rounded-md">
              Profile
            </ul>
            <ul className="my-4 hover:bg-slate-300 focus:bg-stone-500 px-6 py-1 rounded-md">
              Logout
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
