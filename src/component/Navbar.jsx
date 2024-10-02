import React, { useState } from "react";

import { TiShoppingCart } from "react-icons/ti";
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div className="fixed z-50 w-full ">
      <div className=" flex flex-row justify-between p-5  bg-[white] shadow-lg">
        <Link to={"/"}>
          <h1 className="text-2xl font-semibold">
            FOO<span className="text-[#d28f11] underline">DIE</span>
          </h1>
        </Link>
        <nav className="hidden  flex-row items-center space-x-8 text-lg font-[700] md:flex ">
          <Link to="/" className="hover:text-[orange] cursor-pointer">
            Home
          </Link>

          <Link to="/review" className="hover:text-[orange] cursor-pointer">
            Review
          </Link>
          <Link to="/contact" className="hover:text-[orange] cursor-pointer">
            Contact
          </Link>
          <Link
            to={"/cart"}
            className="text-3xl hover:text-[orange] cursor-pointer"
          >
            <button
              type="button"
              class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <TiShoppingCart className="text-lg" />
              <span class="sr-only">Notifications</span>
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                {cart.length}
              </div>
            </button>
          </Link>
        </nav>
        <div className="flex items-center text-4xl md:hidden">
          {menu ? (
            <IoMdClose onClick={handleChange} />
          ) : (
            <MdMenuOpen onClick={handleChange} />
          )}
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col px-2 space-y-3 font-[400] items-center duration-300 text-2xl bg-black text-white my-2`}
      >
        <Link
          to="/"
          onClick={() => setMenu(!menu)}
          className="hover:text-[orange] cursor-pointer"
        >
          Home
        </Link>

        <Link
          to="/review"
          onClick={() => setMenu(!menu)}
          className="hover:text-[orange] cursor-pointer duration-300"
        >
          Review
        </Link>
        <Link
          to="/contact"
          onClick={() => setMenu(!menu)}
          className="hover:text-[orange] cursor-pointer duration-300"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          onClick={() => setMenu(!menu)}
          className="text-3xl hover:text-[orange] cursor-pointer duration-300"
        >
          <button
            type="button"
            class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <TiShoppingCart />
            <span class="sr-only">Notifications</span>
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {cart.length}
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
