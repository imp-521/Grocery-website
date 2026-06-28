import React from "react";
import { MdArrowBackIos} from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-150 md:h-50 lg:h-70 bg-zinc-100 flex items-center justify-center flex-col md:flex-row-reverse mt-10 px-8 gap-3 lg:px-15">
        <div dir="rtl" className="h-full w-full flex items-right justify-center md:justify-start flex-col text-right gap-1 flex-1">
          <span className="font-bold text-2xl md:text-3xl lg:text-4xl cursor-pointer py-4 md:py-3 lg:py-8">
            سب<span className="text-orange-500">ز</span>ینو
          </span>
          <p className="text-sm lg:text-base text-zinc-500">خرید آسان محصولات تازه و باکیفیت در هر زمان.</p>
          <span className="text-sm lg:text-base  text-zinc-500">&copy; تمامی حقوق این سایت محفوظ است.</span>
        </div>
        <div dir="rtl" className="w-full flex flex-col md:flex-row justify-center items-start gap-1 flex-5 md:flex-2">
            <div className="flex items-start justify-center lg:justify-between flex-col gap-3 md:gap-4 lg:gap-8 flex-1">
                <h5 className="font-bold text-xl lg:text-2xl">شرکت</h5>
                <span className="cursor-pointer text-zinc-500 text-lg">درباره</span>
                <span className="cursor-pointer  text-zinc-500">سوالات متداول</span>
            </div>
            <div className="flex items-start justify-start flex-col gap-3 lg:gap-8 flex-1 md:gap-4">
              <h5 className="font-bold text-xl lg:text-2xl">پشتیبانی</h5>
              <span className="cursor-pointer  text-zinc-500">مرکز پشتیبانی</span>
              <span className="cursor-pointer  text-zinc-500">بازخورد</span>
              <span className="cursor-pointer  text-zinc-500">تماس با ما</span>
            </div>
            <div className="flex items-start justify-start flex-col gap-3 flex-1 relative lg:gap-8 md:gap-4 w-full">
              <h5 className="font-bold text-xl lg:text-2xl">متصل بمانید</h5>
              <span className="cursor-pointer  text-zinc-500">سوال یا بازخورد؟</span>
              <span className="cursor-pointer  text-zinc-500">خوشحال میشیم از تو بشنویم.</span>
              <button className="absolute bg-linear-to-b from-orange-500 to-orange-400 w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-lg left-1 bottom-2 lg:bottom-1 cursor-pointer"><MdArrowBackIos className="text-white translate-x-1 lg:text-lg" /></button>
              <input className="bg-white focus:outline-none p-3 text-sm rounded-lg w-full" autoComplete="none" type="email" placeholder="آدرس ایمیل"/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
