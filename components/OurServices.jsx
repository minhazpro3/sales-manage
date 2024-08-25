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
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-white py-4 group shadow-md hover:shadow-md shadow-gray-400 transition-colors duration-150 hover:bg-indigo-600 hover:bg-opacity-80 hover:cursor-pointer rounded-xl  px-3"
          >
            <div className="">
              <div
                className={`text-3xl ${index / 2 == 0 ? "text-red-900" : ""}`}
              >
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl my-2 text-indigo-600 group-hover:text-white">
                  {service.title}
                </h2>
                <p className="text-sm py-2 group-hover:text-white">
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
