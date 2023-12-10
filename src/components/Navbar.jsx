"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
import { ButtonHTMLAttributes as btn } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Home", url: "/" },
    {
      name: "Courses",
      url: "/courses",
    //   dropdown: [
    //     { name: "Service 1", url: "" },
    //     { name: "Service 2", url: "" },
    //     { name: "Service 3", url: "" },
    //   ],
    },
    { name: "About", url: "/" },
    { name: "Contact", url: "/" },
    { name: "Profile", url: "/profile" },
    { name: "Login", url: "/" },
    
  ];
  return (
    <nav className="gradient_background w-full bg-white shadow-lg">
      <div className="justify-around mx-auto  md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="">
              <div className="avatar">
                <div className="w-16 rounded">
                  {/* <img src="" /> */}
                  <h1 className=" pur_color text-3xl font-bold flex"><img src="./img/final.webp" width={50} alt="" srcset="" /><span className="pt-2">TECHXURY</span></h1>
                </div>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-black" />
                ) : (
                  <AiOutlineMenu className="text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="pur_color font-semibold">
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <NavLink to={url}>{name}</NavLink>
                  )}
                </li>
                

              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;