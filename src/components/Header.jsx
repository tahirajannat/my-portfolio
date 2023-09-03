import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
    let activeClassName = "block border-b-2 border-[#136C47] text-[#136C47]";
    let nonActiveClassName = "block text-[#1C2E50] text-[17px] hover:border-b-2 hover:border-[#136C47] hover:text-[#136C47] transition-all duration-75";
  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-6 shadow-sm">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
          <div class="flex items-center lg:order-2">
            <a href="#">
              <FaUserCircle className="text-2xl text-[#136C47]" />
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex items-center flex-col mt-4 font-medium lg:flex-row space-x-14 lg:mt-0">
                <NavLink
                  to=""
                  className={({ isActive }) => isActive? activeClassName :nonActiveClassName}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about-me"
                  className={({ isActive }) => isActive? activeClassName :nonActiveClassName}

                >
                  About Me
                </NavLink>
                <NavLink
                  to="/work"
                  className={({ isActive }) => isActive? activeClassName :nonActiveClassName}

                >
                  Work
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) => isActive? activeClassName :nonActiveClassName}

                >
                  Services
                </NavLink>
                <NavLink
                  to="contact"
                  className={({ isActive }) => isActive? activeClassName :nonActiveClassName}
                >
                  Contact
                </NavLink>
            </ul>
         
          </div>
        </div>
      </nav>
    </header>
  );
}
