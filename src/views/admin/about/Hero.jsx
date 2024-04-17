import React from "react";
import hero from "../../../assets/img/about/hero.jpg"

const Hero = () => {
  return (
    <div className="dark:bg-[#98dbc6] dark:text-white duration-300 rounded-md shadow-lg">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={hero}
              alt=""
              className="w-full sm:max-w-[300px] md:max-w-[500px] rounded-lg"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-semibold ml-10"
              style={{ lineHeight: 1.2 }}
            >
              Our Mission
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="ml-10 text-1xl">
            Jorie Healthcare is transforming the healthcare industry through advanced technology and innovation. As a healthcare service provider with a rich history of developing cutting-edge solutions, we've harnessed the power of artificial intelligence to improve patient outcomes and streamline operations.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
