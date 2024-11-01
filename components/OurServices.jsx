import React from "react";
import { TbWorld } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { MdCoPresent } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { BiCustomize } from "react-icons/bi";
import { TbPremiumRights } from "react-icons/tb";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Super High Performance",
      desc: "Built with performance in mind. The speed optimization is super fast compared to other themes.",
      icon: <CgPerformance />,
    },
    {
      id: 2,
      title: "Products manage",
      desc: "We have the capacity to deliver products when and where needed in any part of the country within 48 hours.",
      icon: <AiOutlineProduct />,
    },
    {
      id: 3,
      title: "Attendance",
      desc: "We offer a complete array of sales and marketing services to open up new revenue opportunities.",
      icon: <MdCoPresent />,
    },
    {
      id: 4,
      title: "Mobile Friendly",
      desc: "Vantage is designed and optimized to work perfectly, friendly on all mobile devices.",
      icon: <CiMobile1 />,
    },
    {
      id: 5,
      title: "Easy to Use & Customize",
      desc: "100% beginner, junior and creative friendly. Easily customize your store with well-thought-out options.  ",
      icon: <BiCustomize />,
    },
    {
      id: 6,
      title: "Premium Features",
      desc: "Increase traffic and sales with our premium features, all of which are optimized and easy to set up.",
      icon: <TbPremiumRights />,
    },
  ];

  return (
    <div className="container mx-auto px-8 md:px-0 mt-6 mb-10">
      <div className="flex justify-center">
        <h2 className="my-6 text-3xl md:text-4xl pt-10 pb-4 font-semibold underline-gradient">
          We Work
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-[#f5f5f5] px-4 py-8 rounded-xl shadow-2xl shadow-[#d5d5d5] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="">
              <div className="my-5 text-4xl text-green-500 flex justify-center ">
                {service.icon}
              </div>
              <div className="text-center">
                <h2 className="  ">{service.title}</h2>
                <p className="text-sm py-2 ">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
