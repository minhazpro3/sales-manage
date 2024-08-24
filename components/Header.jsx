"use client";

import { RiMenu3Line } from "react-icons/ri";

const Header = ({ drawerFnc }) => {
  return (
    <div className="bg-gray-500 w-full ">
      <div className="container mx-auto px-8 md:px-0 ">
        <div className="flex justify-between items-center py-4 px-2   ">
          {/* logo */}
          <div>
            <h3>Logo</h3>
          </div>
          {/* responsive menu */}
          <div
            className="visible place-self-end md:hidden "
            onClick={() => drawerFnc()}
          >
            <RiMenu3Line size={22} />
          </div>
          {/* sidebar */}

          <div
            className={` md:flex md:justify-between md:items-center md:gap-3 hidden md:visible md:bg-transparent   `}
          >
            <ul className="link my-2">Home</ul>
            <ul className="link my-2">Services</ul>
            <ul className="link my-2">pages</ul>
            <ul className="link my-2">Profile</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
