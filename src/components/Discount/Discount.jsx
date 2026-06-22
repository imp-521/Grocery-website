import React from "react";
import Button from "../Button/Button";

const Discount = () => {
  return (
    <section className="bg-zinc-100">
    <div className="px-8 bg-zinc-100 mt-12 lg:mt-15 flex flex-col lg:flex-row-reverse gap-3 lg:gap-0 lg:px-15 bg-contain bg-no-repeat lg:h-80 lg:w-full lg:bg-[url('/fresh-fruits.png')] w-full">
      <div className="text-right lg:transform lg:-rotate-90 flex justify-end lg:items-center lg:justify-center flex-1">
        <span className="font-bold text-5xl text-orange-500 lg:text-8xl">۲۰%</span>
      </div>
      <div dir="rtl" className="text-right flex lg:gap-8 gap-3 flex-col lg:flex-8 lg:items-right lg:justify-center lg:py-2 lg:pl-90 pb-2">
        <h3 className="font-bold text-2xl lg:text-5xl">هدیه اولین سفارش!</h3>
        <p className="text-zinc-500 text-sm lg:text-lg">
          با اولین سفارش خود از فروشگاه ما، تخفیف ویژه دریافت کنید و خریدی تازه
          و باکیفیت را تجربه کنید. ما بهترین محصولات را با قیمت مناسب و ارسال
          آسان برای شما فراهم کرده‌ایم.
        </p>
        <Button content='دریافت تخفیف' />
      </div>
    </div>
    </section>
  );
};

export default Discount;
