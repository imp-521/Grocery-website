import React from "react";
import Navbar from "../Navbar/Navbar";
import grocery from "../../assets/grocery.png";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <section id="hero">
      <div className=" w-full min-h-40 px-8 lg:px-15 sm:h-110 sm:w-full sm:flex sm:flex-row-reverse lg:w-full lg:min-h-screen  pt-15 sm:pt-10">
        <div
          dir="rtl"
          className="w-full h-[50%] sm:h-full sm:w-[50%] pt-8 sm:flex sm:justify-center sm:flex-col lg:gap-3"
        >
          <span className="bg-orange-100 text-sm sm:text-base sm:flex sm:items-center sm:justify-center sm:w-45 sm:h-10 rounded-full text-orange-500 px-2 py-1">
            تضمین بهترین کیفیت ...{" "}
          </span>
          <h1 className="text-4xl lg:text-6xl sm:text-4xl py-4 lg:py-0 font-bold sm:leading-12 lg:leading-20">
            <span className="text-orange-500">میوه</span> و{" "}
            <span className="text-orange-500">سبزیجات</span><br /> ارگانیک، مهمان شهر
            شما
          </h1>
          <p className="text-sm lg:text-xl text-gray-500 pb-6">
            تازه‌ترین محصولات ارگانیک، مستقیم از مزرعه به خانه شما<br className="hidden sm:block" /> ارسال سریع و
            تضمین کیفیت.
          </p>
          <Button content='خرید حالا' />
        </div>

        <div className=" w-full h-[50%] flex items-center justify-center sm:h-full sm:w-[50%]">
          <img
            src={grocery}
            alt="grocery"
            className="w-70 h-70 sm:w-80 sm:h-75 lg:w-140 lg:h-120 pt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
