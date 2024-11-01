import Image from "next/image";
import React from "react";
import about from "../public/images/About-Agent.jpg";
import { GoArrowUpRight } from "react-icons/go";

export const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center my-4">
        <h2 className="my-6 text-3xl md:text-4xl pt-10 font-bold underline-gradient pb-4">
          {" "}
          <span className="font-semibold ">About</span> Us
        </h2>
      </div>
      {/* bg image */}
      <div className="bg-image py-12  ">
        <div className="container mx-auto px-8 md:px-0">
          {/*  section content*/}
          <div>
            <div className="md:grid grid-cols-2 gap-4  ">
              <div className="mb-6 md:mb-0 ">
                <h2 className="underline text-2xl">Duco</h2>
                <h2 className="md:text-5xl text-3xl font-semibold my-4">
                  Your <span className="text-indigo-600">Partner</span> in
                  Streamlined Sales Management!__
                </h2>
                <p className="font-normal text-sm">
                  At [Duco], we believe that efficient, data-driven sales
                  management is the cornerstone of business growth. Our platform
                  empowers companies of all sizes to streamline their sales
                  processes, gain real-time insights, and optimize their
                  strategies to achieve measurable results. We’re dedicated to
                  providing businesses with the tools they need to build lasting
                  customer relationships and accelerate revenue growth.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-800 px-3 py-2 text-white rounded-md flex items-center gap-2 mt-6">
                  Explore <GoArrowUpRight />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[270px] h-[250px] sm:w-[450px] sm:h-[450px] md:w-[450px] md:h-[400px]">
                  <Image src={about} alt="" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
