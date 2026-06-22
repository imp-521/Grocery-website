import React from "react";
import Heading from "../Heading/Heading";
import { IoHeartSharp } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex flex-row-reverse gap-4">
        <div className="flex flex-1 items-center justify-center relative">
          <span className="z-2 text-white text-2xl lg:text-2xl">{item.icon}</span>
          <div className="bg-linear-to-b from-orange-400 to-orange-500 w-10 h-10 lg:w-11 lg:h-11 absolute rounded-full"></div>
        </div>
        <div className="flex flex-5 items-end text-right flex-col justify-center gap-2">
          <h3 className="font-bold text-xl lg:text-3xl">{item.title}</h3>
          <p className="text-sm lg:text-lg text-zinc-500">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex flex-row-reverse gap-4 md:flex-row">
        <div className="flex flex-1 items-center justify-center relative">
          <span className="z-2 text-white text-2xl lg:text-2xl">{item.icon}</span>
          <div className="bg-linear-to-b from-orange-400 to-orange-500 w-10 h-10 lg:w-11 lg:h-11 absolute rounded-full"></div>
        </div>
        <div className="flex flex-5 items-end md:items-start text-right md:text-left flex-col justify-center gap-2">
          <h3 className="font-bold text-xl lg:text-3xl">{item.title}</h3>
          <p className="text-sm lg:text-lg text-zinc-500">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="flex justify-center flex-col h-screen px-8 gap-15 md:gap-3 lg:gap-0 mt-10 lg:px-15">
        <div className="flex flex-1 items-center justify-center md:flex-1 lg:flex-1">
          <Heading first="اصول و ارزش" second="های" third="ما" />
        </div>
        <div className="flex flex-4  flex-col md:flex-row gap-10 md:gap-2 md:flex-2 lg:flex-2">

          {/* left values */}
          <div className="flex gap-10 flex-col items-center justify-between lg:justify-center lg:gap-40 md:flex-2">{leftValues}</div>

          <div className="hidden md:flex items-center justify-center md:flex-2">
            <img src={basket} alt="Basket fruits" className="md:w-auto md:h-auto"/>
          </div>

          {/* right values */}
          <div className="flex gap-10 flex-col items-center justify-between lg:justify-center lg:gap-40 md:flex-2">{rightValues}</div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "اعتماد",
    para: "اعتماد شما بزرگ‌ترین سرمایه ماست؛ به همین دلیل همواره کیفیت، شفافیت و رضایت مشتری را در اولویت قرار می‌دهیم",
    icon: <IoHeartSharp />,
  },
  {
    id: 2,
    title: "ایمنی مواد غذایی",
    para: "ما با رعایت بالاترین استانداردهای بهداشتی و کنترل کیفیت، سلامت و تازگی محصولات را تا زمان رسیدن به دست شما تضمین می‌کنیم",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: "همیشه تازه",
    para: "ما هر روز تازه‌ترین و باکیفیت‌ترین محصولات را انتخاب می‌کنیم تا طعم واقعی تازگی را به خانه شما بیاوریم",
    icon: <FaLeaf />,
  },
  {
    id: 4,
    title: "کاملا ارگانیک",
    para: "تمام محصولات ارگانیک ما با دقت انتخاب می‌شوند تا غذایی سالم، طبیعی و باکیفیت را با اطمینان خاطر به شما ارائه دهیم",
    icon: <PiPlantFill />,
  },
];
