import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

//external imports
import images from "../assets";
import { Button } from "./";
import { changeView, selectDisplay } from "@/slices/displaySlices";

interface HeaderProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

function Header({ theme, setTheme }: HeaderProps) {
  if (!theme) {
    setTheme("dark");
  }

  const state = useSelector(selectDisplay);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-between items-center xs:px-4 xs:py-2 py-4 md:py-8 border-b border-dark/20 dark:border-white/20">
      <div className="hidden md:flex items-center justify-center space-x-4 mx-2 md:mx-6 md:space-x-8">
        <button
          className="disabled:border-b-2 disabled:border-red-500/40 pb-2"
          onClick={() => dispatch(changeView())}
          disabled={state}
        >
          <Image src={images.grid} alt="gird view button" className="w-8 h-8" />
        </button>
        <button
          className="disabled:border-b-2 disabled:border-red-500/40 pb-2"
          onClick={() => dispatch(changeView())}
          disabled={!state}
        >
          <Image src={images.list} alt="list view button" className="w-8 h-8" />
        </button>
      </div>
      <Link href="/">
        <div>
          <Image
            src={images.logo}
            alt="logo"
            className="h-[70px] w-[70px] xs:h-[30px] xs:w-[30px] md:h-[100px] md:w-[100px] object-cover"
          />
        </div>
      </Link>
      <div className="flex px-2 space-x-3">
        <Button title="zaloguj" />
        <Button title="subskrybuj" />
      </div>
    </div>
  );
}

export default Header;
