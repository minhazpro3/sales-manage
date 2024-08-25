import Image from "next/image";
import React from "react";
import butterfly from "../public/images/butterfly.png";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-amber-300 bg-opacity-30  ">
      <div className="container mx-auto px-8 md:px-0">
        <div className="md:flex justify-between items-center gap-6  ">
          <div className=" px-6 py-10  ">
            <span className="text-white text-sm bg-indigo-500 px-3 py-2 rounded-md my-3">
              New Experience
            </span>
            <h2 className="md:text-5xl text-3xl font-semibold my-4">
              Maximizing <span className="text-indigo-500">Sales</span>,
              Simplifying Your Success_
            </h2>
            <p className="md:text-base text-sm my-4 text-gray-600">
              Streamline your sales process, boost efficiency, and achieve
              consistent growth with our comprehensive, user-friendly sales
              management platform.
            </p>
            <button className="bg-purple-500 px-3 py-2 text-white rounded-md flex items-center gap-2">
              Try now <GoArrowUpRight />
            </button>
          </div>
          <div className=" flex justify-center ">
            <div className="relative w-[250px] -z-0 h-[250px] sm:w-[450px] sm:h-[450px] md:w-[450px] md:h-[450px]">
              <Image src={butterfly} alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
