"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { FiUser, FiSettings, FiLogOut, FiBell, FiPlus } from 'react-icons/fi';
import { BsPlusSquare } from 'react-icons/bs';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#1F1F23]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">

            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a
                href="/"
                className="ml-4 px-3 py-2 mt-2 rounded-md text-sm font-medium bg-[#272C34] h-12 w-12 text-white hover:text-gray-300"
              >
                <Image 
                  src='/assets/icons/navbar/patcher.png'
                  alt='patcher'
                  width={20}
                  height={20}
                  className='my-2 h-6 w-6'
                />
              </a>
              <a
                href="/mixer"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Image 
                  src='/assets/icons/navbar/editor.png'
                  alt='editor'
                  width={20}
                  height={20}
                  className='my-4'
                />
              </a>
              <a
                href="/patcher"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Image 
                  src='/assets/icons/navbar/mixer.png'
                  alt='mixer'
                  width={20}
                  height={20}
                  className='my-4'
                />
              </a>
            </div>
          </div>
          <div className='ml-8'>
            <p className='font-montserrat text-base font-bold leading-5 tracking-normal text-center text-gray-400 text-xs flex gap-2 mt-6'>
              New project 
              <span className="text-gray-400 inline-block ml-1 w-2 h-2 mt-1 border-b-2 border-r-2 transform rotate-45"></span>
            </p>
          </div>
          <div className="flex items-center">
            <button
              className="flex ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            >
              <BsPlusSquare className="w-4 h-4 mr-2 mt-1" />
              Publish
            </button>
            <button className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none relative">
              <span className="absolute top-0 right-0 mt-0 mr-1 bg-gradient-to-tr from-blue-800 to-indigo-400 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
              <FiBell className="w-5 h-5" />
            </button>
            <div className="relative ml-4">
              <button
                className="flex justify-between text-sm border-2 px-4 py-0 pl-0 gap-2 border-transparent rounded-lg focus:outline-none bg-[#272C34] relative"
                onClick={toggleDropdown}
              >
                <Image
                  src='/assets/images/user.png'
                  alt="User Image"
                  width={30}
                  height={30}
                  className="h-full w-8 rounded-semi "
                />
                <p className='text-white text-sm flex gap-2 mt-1'>
                  <span>Johan Romero</span>
                  <span className="inline-block ml-1 w-2 h-2 mt-1 border-b-2 border-r-2 transform rotate-45"></span>
                </p>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
