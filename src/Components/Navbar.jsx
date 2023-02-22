import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../Context/MyContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { menuOpen, setMenuOpen } = useContext(MyContext);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <div
      className="flex justify-center items-center h-16
    md:h-20 border-solid border-b-2 border-indigo-700 bg-indigo-300"
    >
      <div className="flex w-10/12 justify-between items-center">
        <h1 className="text-2xl md:text-2xl cursor-pointer py-1 px-1.5 rounded-2xl text-indigo-700 hover:text-white transition duration-350 ease-in">
          {" "}
          <Link to={"/"}>Live Better</Link>
        </h1>
        <ul className="hidden md:flex justify-between w-80 text-indigo-700 text-lg">
          {["Plans", "Diet", "Fitness", "Motivation"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`} // set the path for the link based on the item name
                className="cursor-pointer hover:text-white transition duration-350 ease-in"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden ">
          {menuOpen !== true ? (
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                viewBox="0 0 100 80"
                className="w-5 h-5 text-indigo-700 hover:text-indigo-400"
              >
                <rect width="110" height="12" className="fill-current"></rect>
                <rect
                  y="30"
                  width="110"
                  height="12"
                  className="fill-current"
                ></rect>
                <rect
                  y="60"
                  width="110"
                  height="12"
                  className="fill-current"
                ></rect>
              </svg>
            </button>
          ) : (
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-indigo-700 w-6 h-6 hover:text-indigo-400 "
              >
                <path
                  fillRule="evenodd"
                  d="M14.35 14.35a1 1 0 0 1-1.41 0L10 11.41l-2.94 2.94a1 1 0 1 1-1.41-1.41L8.59 10 5.65 7.06a1 1 0 0 1 1.41-1.41L10 8.59l2.94-2.94a1 1 0 0 1 1.41 1.41L11.41 10l2.94 2.94a1 1 0 0 1 0 1.41z"
                ></path>
              </svg>
            </button>
          )}
          {menuOpen && (
            <>
              <ul className="flex-col flex  items-center fixed inset-0 right-2/4 uppercase bg-indigo-400  backdrop-blur-lg gap-14 justify-center p-8 text-indigo-700 md:hidden">
                {["Home", "Plans", "Diet", "Fitness", "Motivation"].map(
                  (item) => (
                    <li
                      key={item}
                      className="cursor-pointer text-xl hover:text-white"
                    >
                      <Link
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
