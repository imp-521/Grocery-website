import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../Heading/Heading";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Customers = () => {
  return (
    <section className="lg:h-140">
      <div className="w-full h-80 md:h-95 lg:h-120 text-center mt-10 flex items-center justify-center px-8 lg:px-15 flex-col gap-5 lg:gap-10">
        <div className="flex items-center justify-center flex-3">
          <Heading first="مشتریان" second="چه" third=" می گویند؟" />
        </div>

        <div className="w-full flex flex-1 items-start justify-end gap-1 flex-row mt-2">
          <button className="prev-btn bg-zinc-100 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:bg-linear-to-b from-orange-400 to-orange-500 hover:text-white rounded-lg cursor-pointer">
            <MdOutlineArrowBackIos className="text-sm lg:text-lg" />
          </button>
          <button className="next-btn bg-zinc-100 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:bg-linear-to-b from-orange-400 to-orange-500 hover:text-white rounded-lg cursor-pointer">
            <MdOutlineArrowForwardIos className="text-sm lg:text-lg" />
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-full h-full"
        >
          {review.map((item) => {
            return (
              <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl">
                <div className="flex items-center justify-center flex-col gap-4 lg:px-5">
                  <div className="flex flex-row-reverse w-full flex-1 justify-center items-center gap-4">
                    <div className="flex items-center justify-center flex-1 pt-3">
                      <div className="h-12 w-12 rounded-full outline-2 outline-orange-500 outline-offset-4 mr-4 overflow-hidden">
                        <img
                          className="object-cover h-12 w-12"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex items-end justify-center gap-0 md:gap-1 lg:gap-1 flex-col flex-6 pt-3">
                      <h5 className="font-bold lg:text-xl">{item.name}</h5>
                      <p className="text-zinc-600 text-sm lg:text-lg">{item.profession}</p>
                      <span className="flex gap-1 text-yellow-500">
                        {Array.from({length: item.rating}, (_, index) =>(
                          <FaStar key={index} />
                        ))}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex flex-1 items-center justify-center px-3 text-right lg:pt-4 md:pt-3">
                    <p dir="rtl" className="text-sm text-zinc-700 lg:text-base">
                      {item.para}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Customers;

const review = [
  {
    id: 1,
    name: "نازنین زهرا مرادی",
    profession: "فود بلاگر",
    rating: 2,
    para: `کیفیت محصولات واقعاً عالی بود و همه اقلام تازه و باکیفیت به دستم رسید.
    بسته‌بندی بسیار تمیز و مرتب بود و هیچ‌کدام از محصولات آسیب ندیده بودند.
    قطعاً دوباره از این فروشگاه خرید خواهم کرد.`,
    image: customer1,
  },
  {
    id: 2,
    name: "امیر شهسواری",
    profession: "آشپز",
    rating: 5,
    para: `روند ثبت سفارش در سایت بسیار ساده و روان بود و خرید را آسان کرد.
    همه محصولات دقیقاً مطابق تصاویر و توضیحات سایت بودند.
    از سرعت ارسال و کیفیت خدمات کاملاً رضایت دارم.`,
    image: customer2,
  },
  {
    id: 3,
    name: "مهسا حقیقت نیا",
    profession: "کارشناس تغذیه",
    rating: 2,
    para: `پشتیبانی سایت بسیار محترمانه و پاسخ‌گو بود و به سؤالاتم سریع رسیدگی کرد.
    محصولات با کیفیت بالا و در زمان مقرر به دستم رسیدند.
    این یکی از بهترین تجربه‌های خرید اینترنتی من بود.`,
    image: customer3,
  },
  {
    id: 4,
    name: "علی دبیری",
    profession: "کارمند",
    rating: 3,
    para: `قیمت محصولات نسبت به کیفیت آن‌ها بسیار مناسب و منصفانه بود.
    میوه‌ها و سبزیجات کاملاً تازه و با بسته‌بندی عالی ارسال شدند.
    از خرید خود بسیار راضی هستم و این فروشگاه را پیشنهاد می‌کنم.`,
    image: customer4,
  },
  {
    id: 5,
    name: "نگین دیانت",
    profession: "دانشجوی پزشکی",
    rating: 4,
    para: `تنوع بالای محصولات باعث شد همه چیز مورد نیازم را در یک‌جا پیدا کنم.
    طراحی سایت زیبا و استفاده از آن بسیار راحت و لذت‌بخش بود.
    ارسال سریع و کیفیت خوب کالاها باعث شد به مشتری دائمی این فروشگاه تبدیل شوم.`,
    image: customer5,
  },
];
