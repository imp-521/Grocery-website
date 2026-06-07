import React from "react";
import Heading from "../Heading/Heading";
import { IoHeartSharp } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div className="">
        <div>
          <span>{item.icon}</span>
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item) => {
    return (
      <div>
        <div>
          <span>{item.icon}</span>
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="flex items-center justify-center flex-col h-screen px-8">
        <div className="flex flex-1 items-center justify-center flex-[]">
          <Heading first="اصول و ارزش" second="های" third="ما" />
        </div>
        <div className="flex flex-4">
          {/* left values */}
          <div className="">{leftValues}</div>

          <div className="hidden">
            <img src={basket} alt="Basket fruits" />
          </div>

          {/* right values */}
          <div>{rightValues}</div>
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
    para: "اعتماد شما بزرگ‌ترین سرمایه ماست؛ به همین دلیل همواره کیفیت، شفافیت و رضایت مشتری را در اولویت قرار می‌دهیم.",
    icon: <IoHeartSharp />,
  },
  {
    id: 2,
    title: "ایمنی مواد غذایی",
    para: "ما با رعایت بالاترین استانداردهای بهداشتی و کنترل کیفیت، سلامت و تازگی محصولات را تا زمان رسیدن به دست شما تضمین می‌کنیم.",
    icon: <FaShieldAlt />,
  },
  {
    id: 3,
    title: "همیشه تازه",
    para: "ما هر روز تازه‌ترین و باکیفیت‌ترین محصولات را انتخاب می‌کنیم تا طعم واقعی تازگی را به خانه شما بیاوریم.",
    icon: <FaLeaf />,
  },
  {
    id: 4,
    title: "کاملا ارگانیک",
    para: "تمام محصولات ارگانیک ما با دقت انتخاب می‌شوند تا غذایی سالم، طبیعی و باکیفیت را با اطمینان خاطر به شما ارائه دهیم.",
    icon: <PiPlant />,
  },
];
