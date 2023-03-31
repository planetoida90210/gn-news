import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

interface SidebarProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

export default function Sidebar({ theme, setTheme }: SidebarProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col justify-between items-center py-14 ${
        showSidebar && "w-1/5 md:w-1/3 lg:w-1/4"
      } w-[60px] bg-light1 dark:bg-dark1 shadow-sm`}
    >
      {!showSidebar ? (
        <>
          <div>
            <button
              type="button"
              className="text-4xl tracking-wide text-black/80 dark:text-white"
              onClick={() => setShowSidebar((prevState) => !prevState)}
            >
              ...
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {theme === "light" ? (
                <FiMoon size={20} className=" w-6 h-6 text-[#858ead] hover:text-blue-500" />
              ) : (
                <FiSun size={20} className="w-6 h-6 hover:text-yellow-500 text-[#858ead]" />
              )}
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <button
              type="button"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {theme === "light" ? (
                <FiMoon size={20} className=" w-6 h-6 text-[#858ead] hover:text-blue-500" />
              ) : (
                <FiSun size={20} className="w-6 h-6 hover:text-yellow-500 text-[#858ead]" />
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
