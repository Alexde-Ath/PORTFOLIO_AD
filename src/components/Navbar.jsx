import React, { useEffect, useState } from "react";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20`}
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
          </div>
      </div>
    </nav>
  );
};

export default Navbar;