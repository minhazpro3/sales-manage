import React from "react";
import { TbWorld } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { MdCoPresent } from "react-icons/md";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Worldwide Service",
      desc: "We assist businesses in accessing the best resources from around the world. Product offerings of different companies gets enriched and diversified with trading solutions from this",
      icon: <TbWorld />,
    },
    {
      id: 2,
      title: "Products manage",
      desc: "We have the capacity to deliver products when and where needed in any part of the country within 48 hours with our 360 degree distribution and logistics system.",
      icon: <AiOutlineProduct />,
    },
    {
      id: 3,
      title: "Attendance",
      desc: "We offer a complete array of sales and marketing services to open up new revenue opportunities for businesses in Bangladesh by ensuring products' distribution in all relevant channels all across the world",
      icon: <MdCoPresent />,
    },
  ];

  return (
    <div className="container mx-auto px-8 md:px-0 my-6">
      <h2 className="text-center my-6 text-3xl   md:text-4xl  py-6 text-purple-500">
        We Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="hover:bg-white py-4 group shadow-md hover:shadow-md shadow-gray-400 transition-colors duration-150  bg-indigo-500 bg-opacity-90 hover:bg-opacity-80 hover:cursor-pointer rounded-xl border-2 px-3"
          >
            <div className="">
              <div
                className={`text-3xl ${
                  index / 2 == 0 ? "text-red-900" : ""
                } bg-slate-300 py-2 px-2 rounded-r-full`}
              >
                {service.icon}
                <h2 className="text-2xl my-2 text-indigo-600 group-hover:text-indigo-600 ">
                  {service.title}
                </h2>
              </div>
              <div>
                <p className="text-sm py-2 group-hover:text-indigo-600 text-white">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
