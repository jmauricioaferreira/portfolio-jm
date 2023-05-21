'use client';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MenuItem } from './components/MenuItem';
import { Logo } from './components/Logo';
import { useState } from 'react';

export const Header = () => {
  const itemsOfMenu: string[] = [
    'home',
    'about me',
    'skills and tools',
    'contact',
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap py-3 justify-between bg-darkNavy px-6 md:px-12 lg:px-24 xl:px-48 fixed w-full top-0 z-10">
      <div className="flex cursor-pointer mr-5 md:mr-0">
        <Logo />
      </div>
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:space-x-5 mt-3 md:mt-0`}
      >
        {itemsOfMenu.map((item) => (
          <MenuItem key={item} name={item} />
        ))}
      </ul>
    </header>
  );
};
