import React from "react";

interface ButtonProps {
  title: string;
  link?: string;
  onClick?: () => void;
}

function Button({ title, link }: ButtonProps) {
  return (
    <div
      className={`${
        title === "zaloguj" ? "border-none" : "border-2 border-red-500/40"
      } capitalize xs:text-xs text-sm md:text-lg text-center p-2 md:p-3 rounded-md cursor-pointer text-black/80 dark:text-white`}
    >
      {title}
    </div>
  );
}

export default Button;
