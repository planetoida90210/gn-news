import React from "react";

interface FooterProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

function Footer({ theme, setTheme }: FooterProps) {
  if (!theme) {
    setTheme("dark");
  }
  return <div>Footer</div>;
}

export default Footer;
