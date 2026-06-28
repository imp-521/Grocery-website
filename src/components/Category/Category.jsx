import React from "react";
import fruit from "../../assets/fruits-and-veggies.png";
import dairy from "../../assets/dairy-and-eggs.png";
import meat from "../../assets/meat-and-seafood.png";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <div
        dir="rtl"
        className="w-full h-320 md:h-110 lg:min-h-160 flex items-center justify-center gap-3 lg:gap-0 md:gap-10 flex-col px-8 lg:px-15"
      >
        <div className="flex items-center justify-center w-full h-[4%] md:h-[20%] lg:h-[20%] lg:mt-20 lg:pb-10">
          <Heading first="خرید بر " second="اساس" third="دسته بندی "/>
        </div>
        <div className="w-full h-[90%] md:[80%] flex items-center justify-between flex-col md:flex-row lg:gap-14 ">
          <div className="flex items-center justify-center md:justify-center flex-col w-full h-1/3 md:w-[1/3] md:h-full gap-3 md:gap-2 lg:gap-0 overflow-hidden md:py-3">
            <div className="lg:w-full lg:h-30  w-full h-30 md:w-full md:h-[30%] px-3 flex items-center justify-center">
              <img
                src={fruit}
                alt="fruit and vegtebles"
                className="w-65 h-30 md:w-full md:h-25 flex items-center justify-center lg:object-contain lg:w-90 lg:h-40 lg:absolute"
              />
            </div>
            <div className="lg:px-4 flex items-center justify-center flex-col lg:w-full lg:h-[70%] lg:bg-zinc-100 rounded-xl lg:gap-4 gap-3 md:gap-3">
              <h3 className="text-xl font-bold md:text-2xl lg:text-3xl lg:pt-10">
                میوه و سبزیجات
              </h3>
              <p className="text-gray-500 text-center md:px-2 lg:text-lg md:text-sm">
                محصولات تازه و ارگانیک که روزانه از مزارع محلی تهیه می‌شوند. طیف
                وسیعی از میوه‌های فصل و سبزیجات تازه را کاوش کنید.
              </p>
              <Link to="/fruits" className="bg-linear-to-b from-orange-400 to-orange-500 text-sm text-white rounded-lg cursor-pointer py-2 px-4 hover:scale-105 hover:to-orange-600 transform-all duration-300 sm:px-8 sm:py-3 lg:px-6 lg:py-2 lg:text-lg md:px-4 md:py-2">مشاهده همه</Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-center flex-col w-full h-1/3 md:w-[1/3] md:h-full gap-3 md:gap-2 lg:gap-0 overflow-hidden md:py-3">
            <div className="lg:w-full lg:h-30  w-full h-30 md:w-full md:h-[30%] px-3 flex items-center justify-center">
              <img
                src={dairy}
                alt="eggs"
                className="w-70 h-30 md:w-full md:h-full lg:w-90 lg:h-40 lg:absolute"
              />
            </div>
            <div className="lg:px-4 flex items-center justify-center flex-col lg:w-full lg:h-[70%] lg:bg-zinc-100 rounded-xl lg:gap-4 gap-3 md:gap-3">
              <h3 className="text-xl lg:text-3xl font-bold md:text-2xl lg:pt-10">
                لبنیات و تخم مرغ
              </h3>
              <p className="text-gray-500 text-center md:px-2 lg:text-lg md:text-sm">
                فرآورده‌های لبنی و تخم‌مرغ‌های محلی. از شیر و ماست خامه‌ای گرفته
                تا پنیرهای سنتی و دست‌ساز انتخاب کنید و طعمی جدید را تحربه کنید.
              </p>
              <Link to="/dairy" className="bg-linear-to-b from-orange-400 to-orange-500 text-sm text-white rounded-lg cursor-pointer py-2 px-4 hover:scale-105 hover:to-orange-600 transform-all duration-300 sm:px-8 sm:py-3 lg:px-6 lg:py-2 lg:text-lg md:px-4 md:py-2">مشاهده همه</Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-center flex-col w-full h-1/3 md:w-[1/3] md:h-full gap-3 md:gap-2 lg:gap-0 overflow-hidden md:py-3">
            <div className="lg:w-full lg:h-30  w-full h-30 md:w-full md:h-[30%] px-3 flex items-center justify-center">
              <img
                src={meat}
                alt=""
                className="w-70 h-30 md:w-full md:h-full lg:w-90 lg:h-40 lg:absolute"
              />
            </div>
            <div className="lg:px-4 flex items-center justify-center flex-col lg:w-full lg:h-[70%] lg:bg-zinc-100 rounded-xl lg:gap-4 gap-3 md:gap-3">
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl lg:pt-10">
                گوشت و غذای های دریایی
              </h3>
              <p className="text-gray-500 text-center md:px-2 lg:text-lg md:text-sm">
                گوشت و مرغ باکیفیت که با اصول بهداشتی تهیه شده‌اند. از بین
                تکه‌های تازه، گزینه‌های طعم‌دار شده و موارد دیگر انتخاب
                کنید.{" "}
              </p>
              <Link to="/meet" className="bg-linear-to-b from-orange-400 to-orange-500 text-sm text-white rounded-lg cursor-pointer py-2 px-4 hover:scale-105 hover:to-orange-600 transform-all duration-300 sm:px-8 sm:py-3 lg:px-6 lg:py-2 lg:text-lg md:px-4 md:py-2">مشاهده همه</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
