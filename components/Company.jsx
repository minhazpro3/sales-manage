import Image from "next/image";
import React from "react";
import co1 from "../public/images/cm-1.png";
import co2 from "../public/images/cm-2.png";
import co3 from "../public/images/cm-3.png";
import co4 from "../public/images/cm-4.png";
import co5 from "../public/images/cm-5.png";
import co6 from "../public/images/cm-6.png";

const Company = () => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="my-6 text-3xl md:text-4xl pt-10 pb-4 font-semibold underline-gradient">
          Services
        </h2>
      </div>
      <div className="marquee-wrapper">
        <div className="container">
          <div className="marquee">
            <div className="marquee-content">
              <div className="relative w-56 h-44">
                <Image src={co4} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co2} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co3} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co4} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co5} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co6} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co4} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co2} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co3} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co4} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co5} alt="" fill />
              </div>
              <div className="relative w-56 h-44">
                <Image src={co6} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
