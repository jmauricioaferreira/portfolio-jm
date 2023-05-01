"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import { MenuItem } from "./components/MenuItem";
import { Logo } from "./components/Logo";

export const Header = () => {
  const itemsOfMenu: string[] = ["about me", "skills and tools", "contact"];

  const handleClickLogo = () => {
    scroll.scrollTo(0);
  };

  return (
    <header className="flex py-3 justify-between bg-darkNavy w-full px-32 mx-auto border-b border-lightNavy fixed shadow-md top-0  z-10">
      <div onClick={(e) => handleClickLogo()} className="flex cursor-pointer ">
        <Logo />
      </div>

      <ul className="flex space-x-5">
        {itemsOfMenu.map((item) => (
          <MenuItem key={item} name={item} />
        ))}
      </ul>
    </header>
  );
};
