import { useState, useEffect } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full  flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(false);
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            UNAIZ
          </p>
        </Link>

      <ul className="list-none  flex invisible sm:visible flex-row gap-10  ">
          {navLinks.map((value) => {
            return (
              <li
                key={`nav links ${value.id}`}
                className={`${
                  active === value.title ? "text-white" : "text-secondary "
                } hover:text-white text-[16px]
              font-medium cursor-pointer`}
                onClick={() => {
                  setActive(value.title);
                }}
              >
                <a href={`#${value.id} `}>{value.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"}
           p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end  items-start flex-col gap-4 ">
              {navLinks.map((value,index) => {
                return (
                  <li
                    key={`value ${index}`}
                    className={`${
                      active === value.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[14px]
              font-medium font-poppins cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(value.title);
                    }}
                  >
                    <a href={`#${value.id} `}>{value.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
