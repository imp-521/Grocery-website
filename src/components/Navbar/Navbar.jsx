import React, { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <header className="h-15 w-full lg:h-20 fixed">
      <nav className="h-full w-full px-8 py-4 lg:px-15 flex items-center justify-between flex-row-reverse bg-white">
        <div className="h-full w-auto flex items-center justify-center">
          <span className="font-bold text-2xl lg:text-3xl cursor-pointer">
            سب<span className="text-orange-500">ز</span>ینو
          </span>
        </div>

        <div className="hidden lg:block">
          <ul className="w-full h-full flex items-center justify-between gap-14 flex-row-reverse">
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              خانه
            </li>
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              درباره ما
            </li>
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              فرایند
            </li>
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              تماس با ما
            </li>
          </ul>
        </div>

        <div className="h-full w-auto flex items-center justify-center gap-3 flex-row-reverse ">
          <div className="hidden lg:block relative">
            <input
              dir="rtl"
              type="text"
              placeholder="جستجو ..."
              className="rounded-full py-2 px-5 focus:outline-none border-2 border-orange-500"
            />
            <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-9 h-9 text-white flex items-center justify-center cursor-pointer">
              <IoIosSearch className="text-xl" />
            </button>
          </div>
          <button>
            <IoHeartSharp className="lg:text-2xl cursor-pointer text-zinc-800" />
          </button>
          <button>
            <FaBagShopping className="lg:text-xl cursor-pointer text-zinc-800" />
          </button>
          <button onClick={toggleMenu}>
            {showMenu ? (<TbMenu2 className="text-lg lg:hidden cursor-pointer text-zinc-800" />) : (<TbMenu3 />)}
          </button>
        </div>

        <div className={`w-65 h-80 lg:hidden absolute flex items-center justify-center bg-orange-500/15 backdrop-blur-lg top-30 left-1/2 ${showMenu ? "left-240" : "left-1/2"} transform -translate-x-1/2 rounded-xl transition-all duration-700`}>
          <ul className="flex items-center justify-center flex-col gap-y-7">
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              خانه
            </li>
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              درباره ما
            </li>
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              فرایند
            </li>
            <li className="text-xl hover:text-orange-500 cursor-pointer duration-200 text-zinc-800">
              تماس با ما
            </li>
            <li className="">
              <input
                dir="rtl"
                type="text"
                placeholder="جستجو ..."
                className="rounded-full py-2 px-5 focus:outline-none border-2 border-orange-500 relative"
              />
              <button className="absolute left-5.5 top-63.5  bg-orange-500 rounded-full w-9 h-9 text-white flex items-center justify-center cursor-pointer">
                <IoIosSearch className="text-xl" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
