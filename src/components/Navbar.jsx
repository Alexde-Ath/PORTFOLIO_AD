import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  return (
    <nav
      className={` w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary bg-opacity-20 backdrop-filter backdrop-blur" : ""
      }`}
    >
        <div className='flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="Alexandra de'Ath"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {/* Dropdowm menu for smaller screens */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary bg-opacity-30 backdrop-filter backdrop-blur absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] ${
                    active === nav.title ? "text-secondary" : "text-tertiary"
                  } hover:text-secondary`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
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