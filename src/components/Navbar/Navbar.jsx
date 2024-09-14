import React from "react";
import logo from "../../assets/logo1.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Items from "./Items.json";
import DropDownLinks from "./DropDownLinks.json";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const Navbar = ({ handleOrderPopup }) => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200
    relative z-40"
    >
      <div className="bg-orange-400  sm:relative w-full py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className=" font-bold text-xl sm:text-2xl flex items-center gap-2"
            >
              <img src={logo} alt="logo" style={{ width: 70 }}></img>
              WEARS
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[50px] sm:w-[200px] group-hover:w-[300px] transition-all
                        duration-300 rounded-full border border-gray-300 px-2 py-1
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800"
              ></input>
              <IoMdSearch
                className="text-gray-500 group-hover:text-orange-600
                        absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-orange-700 to-orange-500 transition-all
                    duration-200 text-white py-1 px-4 rounded-full flex
                    items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping
                className="text-xl text-white drop-shadow-sm
                    cursor-pointer"
              ></FaCartShopping>
            </button>
            <div>
              <DarkMode />
            </div>
            <div className="sm:hidden" onClick={handleNav}>
              {!nav ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
            <div
              className={
                !nav
                  ? "fixed z-40   right-0 top-0 w-[50%] h-[100%] border-l border-r-gray-900 bg-orange-600 ease-in-out duration-300"
                  : "fixed left-[-100%]"
              }
            >
              <div
                className="flex items-end justify-end pt-4 pr-4"
                onClick={handleNav}
              >
                {!nav ? (
                  <AiOutlineClose size={20} />
                ) : (
                  <AiOutlineMenu size={20} />
                )}
              </div>
              <div className="relative group mx-2  py-5 flex justify-between items-center group  sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-full rounded-full border border-gray-300
                        focus:outline-none focus:border-1 focus:border-orange-600
                        dark:border-gray-500 
                        dark:bg-gray-800"
                ></input>
                <IoMdSearch
                  className="text-gray-500 group-hover:text-orange-600
                        absolute top-1/2 -translate-y-1/2 right-3"
                />
              </div>
              <div className="flex items-center text-center justify-center">
              <ul className="pt-15 p-4 font-bold-100">
                {Items.map((item) => (
                  <li className="p-4 border-t-2   border-gray-900">
                    <a href={item.link}>
                    {item.name}</a>
                  </li>
                ))}
              </ul>
              </div>
              <div className="w-full p-2">
                  <div className='flex items-center gap-7 px-3  mt-6'>
                        <a href='#'>
                          <FaInstagram className='text-3xl'/>
                        </a>
                        <a href='#'>
                          <FaFacebook className='text-3xl'/>
                        </a>
                        <a href='#'>
                          <FaLinkedin className='text-3xl'/>
                        </a>
                  </div>
                  <div className='mt-6'>
                        <div className='flex items-center gap-3'>
                              <FaLocationArrow/>
                              <p>Busan, South Korea</p>
                        </div>
                        <div className='flex items-center gap-3'>
                              <FaMobileAlt/>
                              <p>+821028301155</p>
                        </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Items.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block px-4 text-xl hover:text-orange-700 duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center text-xl  gap-[2px] py-2">
              Trending
              <span>
                <FaCaretDown
                  className="transition-all
                            duration-200 text-xl
                            group-hover:rotate-180"
                ></FaCaretDown>
              </span>
            </a>
            <div
              className="absolute z-[9999] hidden group-hover:block w-[200px] 
                    rounded-md bg-white p-2 text-black shadow-md"
            >
              <ul>
                {DropDownLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md p-2
                                    hover:bg-orange-600"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
