import React from "react";
import Heading from "../Heading/Heading";
import { PiFactory } from "react-icons/pi";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
} from "react-icons/tb";
import { PiPlantLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FiTruck } from "react-icons/fi";

const Process = () => {
  const renderProcess = processCard.map((item) => {
    return (
      <div key={item.id} className={`flex items-center justify-center flex-col gap-5 lg:gap-7 ${item.id % 2 === 0 ? 'md:-mt-40' : 'md:mt-40'}`}>
        <div className="flex items-center justify-center">
          <span className="text-6xl border border-dashed rounded-full lg:text-7xl">{item.number}</span>
        </div>
        <div className="flex items-cetner justify-center flex-row-reverse gap-2 lg:gap-4">
           <div className="flex items-center justify-center flex-1 md:hidden lg:block">
             <span className="bg-linear-to-b from-orange-400 to-orange-500 text-2xl lg:text-3xl h-10 w-10 lg:h-12 lg:w-12  flex items-center justify-center rounded-full text-white">{item.icon}</span>
           </div>
           <div dir="rtl" className="flex items-right md:text-center lg:text-right justify-start flex-col flex-4 text-right gap-2">
             <h3 className="font-bold text-lg lg:text-xl">{item.title}</h3>
             <p className="text-zinc-500 text-sm lg:text-lg">{item.para}</p>
           </div>
        </div>
      </div>
    );
  });

  return (
    <section id="progress" className="scroll-mt-20 md:scroll-mt-10 lg:scroll-mt-22">
      <div className="flex items-center justify-center flex-col px-8 mt-10 lg:px-15">
        <div className="text-center md:text-right w-full lg:mb-7">
          <Heading first="چطور کار" third="می کنیم؟" />
        </div>
        <div className="mt-10 flex items-center justify-center flex-col gap-5 md:gap-0 md:flex-row-reverse md:w-full md:h-100">{renderProcess}</div>
      </div>
    </section>
  );
};

export default Process;

const processCard = [
  {
    id: 1,
    number: <TbCircleNumber1 />,
    title: "تامین محصولات",
    para: "ما بهترین و تازه‌ترین محصولات را از تأمین‌کنندگان معتبر انتخاب می‌کنیم.",
    icon: <PiPlantLight />,
  },
  {
    id: 2,
    number: <TbCircleNumber2 />,
    title: "آماده سازی و دسته بندی",
    para: "محصولات با دقت بالا آماده و در بسته‌بندی مناسب برای ارسال قرار می‌گیرند.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3 />,
    title: "کنترل کیفیت",
    para: "تمام محصولات پیش از ارسال از نظر کیفیت و تازگی بررسی می‌شوند.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4 />,
    title: "ارسال و تحویل",
    para: "سفارش شما در سریع‌ترین زمان ممکن به دستتان خواهد رسید.",
    icon: <FiTruck />,
  },
];
