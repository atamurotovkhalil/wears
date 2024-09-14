import { useState } from "react";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";



const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  console.log(element);

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <MdOutlineDarkMode
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-15 text-2xl cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 absolute right-0 z-10"
      />
      <MdDarkMode
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-15 text-2xl cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 "
      />
    </div>
  );
};

export default DarkMode;
