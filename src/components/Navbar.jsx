import React, { useEffect, useState } from "react";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <nav
        className={`w-full flex items-center px-1 py-1 top-0 bg-dpink bg-opacity-5 backdrop-filter backdrop-blur fixed`}>
        <div className='flex flex-1 justify-start items-center'>
          <img
            src={toggle ? close : menu}
            alt="Alexandra de'Ath"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
            draggable="false"
          />
          {/* Dropdowm menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-primary bg-opacity-30 backdrop-filter backdrop-blur absolute`}
            >
          </div>
        </div>
        {/* Widget symbols - idk */}
      </nav>
      <nav className = "w-[90%] mx-16 h-20 flex items-center px-5 oy-0 bottom-0 bg-dpink bg-opacity-5 backdrop-filter backdrop-blur fixed rounded-xl">
        <button>App</button>
      </nav>

    </section>
  );
};

export default Navbar;