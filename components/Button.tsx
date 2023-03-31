import React from "react";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <div
      className={`${
        title === "subskrybuj" ? "border-2 border-red-500/40" : "border-none"
      } capitalize xs:text-xs text-sm md:text-lg p-2 md:p-3 rounded-md cursor-pointer text-black/80 dark:text-white`}
    >
      {title}
    </div>
  );
}

export default Button;
