import React, { useEffect, useState } from "react";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <nav
        className={`w-full flex items-center px-1 py-1 fixed top-0 bg-dpink bg-opacity-5 backdrop-filter backdrop-blur fixed`}>
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
      <nav>
        <button></button>
      </nav>
    </section>
  );
};

export default Navbar;