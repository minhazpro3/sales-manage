"use client";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import butterfly from "../public/images/butterfly.png";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/app/contextApi/contextProvider";
const Header = () => {
  const { drawer, drawerFnc } = useContext(AppContext);

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
