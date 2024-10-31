import Image from "next/image";
import React from "react";
import sales_man_1 from "../public/images/sales_man_1.png";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000, // delay time
          disableOnInteraction: true, // Stops autoplay when the user hovers/interacts
          pauseOnMouseEnter: true, // Optional: specifically pauses autoplay on hover
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide className=" ">
          {" "}
          <div className="bg-gradient-to-r from-[#f0eccb] bg-opacity-100  ">
            <div className="container mx-auto px-8 md:px-0">
              <div className="md:grid grid-cols-2 items-center gap-6  ">
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
                    consistent growth with our comprehensive, user-friendly
                    sales management platform.
                  </p>
                  <button className="bg-purple-500 px-3 py-2 text-white rounded-md flex items-center gap-2">
                    Try now <GoArrowUpRight />
                  </button>
                </div>
                <div className=" flex justify-center ">
                  <div className="relative w-[250px] -z-0 h-[250px] sm:w-[450px] sm:h-[450px] md:w-[300px] md:h-[450px]">
                    <Image src={sales_man_1} alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          {" "}
          <div className="bg-gradient-to-r from-[#cbecf0] bg-opacity-100  ">
            <div className="container mx-auto px-8 md:px-0">
              <div className="md:grid grid-cols-2 items-center gap-6  ">
                <div className=" px-6 py-10  ">
                  <span className="text-white text-sm bg-[#ca6f1e] px-3 py-2 rounded-md my-3">
                    New Experience
                  </span>
                  <h2 className="md:text-5xl text-3xl font-semibold my-4">
                    Empowering <span className="text-indigo-500"> Success</span>
                    , with Unmatched Excellence!
                  </h2>
                  <p className="md:text-base text-sm my-4 text-gray-600">
                    Streamline your sales process, boost efficiency, and achieve
                    consistent growth with our comprehensive, user-friendly
                    sales management platform.
                  </p>
                  <button className="bg-purple-500 px-3 py-2 text-white rounded-md flex items-center gap-2">
                    Try now <GoArrowUpRight />
                  </button>
                </div>
                <div className=" flex justify-center ">
                  <div className="relative w-[250px] -z-0 h-[250px] sm:w-[450px] sm:h-[450px] md:w-[300px] md:h-[450px]">
                    <Image src={sales_man_1} alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          {" "}
          <div className="bg-gradient-to-r from-[#e6cbf0] bg-opacity-100  ">
            <div className="container mx-auto px-8 md:px-0">
              <div className="md:grid grid-cols-2 items-center gap-6  ">
                <div className=" px-6 py-10  ">
                  <span className="text-white text-sm bg-[#30093e] px-3 py-2 rounded-md my-3">
                    New Experience
                  </span>
                  <h2 className="md:text-5xl text-3xl font-semibold my-4">
                    Where <span className="text-indigo-500"> Quality </span>
                    <br />
                    Meets Affordability, Choose Us!
                  </h2>
                  <p className="md:text-base text-sm my-4 text-gray-600">
                    Streamline your sales process, boost efficiency, and achieve
                    consistent growth with our comprehensive, user-friendly
                    sales management platform.
                  </p>
                  <button className="bg-purple-500 px-3 py-2 text-white rounded-md flex items-center gap-2">
                    Try now <GoArrowUpRight />
                  </button>
                </div>
                <div className=" flex justify-center ">
                  <div className="relative w-[250px] -z-0 h-[250px] sm:w-[450px] sm:h-[450px] md:w-[300px] md:h-[450px]">
                    <Image src={sales_man_1} alt="" fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
