import React from "react";
import { TiTick } from "react-icons/ti";

const ServicePlan = () => {
  const plans = [
    {
      id: 1,
      name: "Business",
      title: "Level up with more power and enhanced features.",
      discount: "45",
      price: "85",
      freeDuration: "2",
      renewFee: "8.00",
    },
    {
      id: 2,
      name: "Cloud Startup",
      title: "Enjoy optimized performance & powerful resources.",
      discount: "45",
      price: "85",
      freeDuration: "2",
      renewFee: "8.00",
    },
    {
      id: 3,
      name: "Professional",
      title: "Optimized for advanced WooCommerce stores.",
      discount: "45",
      price: "85",
      freeDuration: "2",
      renewFee: "8.00",
    },
  ];

  return (
    <div className="container mx-auto px-8 md:px-0 my-6">
      <h2 className="text-4xl my-6 text-center py-6  ">Our Plans</h2>
      <div className="grid  md:grid-cols-3 justify-items-center gap-4 ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="px-4 group py-8 bg-gray-300  w-64 sm:w-10/12   rounded-lg hover:shadow-2xl hover:cursor-pointer  shadow-black"
          >
            <div className="group-hover:border-gray-300 border-2 rounded-2xl border-indigo-500 p-4">
              <ul>
                <h2 className="text-2xl md:text-3xl pb-4 font-semibold">
                  {plan.name}
                </h2>
                <span className="text-base  ">{plan.title}</span>
              </ul>
              <ul className="py-3 flex items-center gap-2">
                <del>$45</del>
                <span className="px-2 py-1 bg-indigo-600 text-white rounded-full">
                  Save 71%
                </span>
              </ul>
              <ul>
                <span className="text-2xl md:text-4xl font-bold">
                  <small className="text-base">$</small>23.00{""}
                  <small className="text-base">/mo</small>
                </span>
                <p>+2 months free</p>
              </ul>
              <ul className="text-center">
                -------------------------------------
              </ul>
              <ul>
                <button className="w-full rounded-md hover:bg-purple-800 bg-purple-600 py-2 text-white">
                  Choose plan
                </button>
              </ul>
              <p className="py-3">$ 8.99 /mo when you renew</p>
              <ul>
                <li className="flex items-center gap-2">
                  <TiTick size={35} color="green" />
                  ~100 000 visits monthly
                </li>
                <li className="flex items-center gap-2">
                  <TiTick size={35} color="green" />
                  ~Unlimited user call
                </li>
                <li className="flex items-center gap-2">
                  <TiTick size={35} color="green" />
                  ~100 000 visits monthly
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePlan;
