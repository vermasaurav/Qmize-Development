


import { useState, useEffect } from "react";
import { Menu, ArrowRight, Sun, Moon } from "lucide-react";

export default function TopBanner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme to <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="
    w-full 
    bg-emerald-950 
    dark:bg-emerald-950 
    text-white  
    items-center 
    justify-between 
    px-4 sm:px-8 
    py-1 
    relative 
    transition-all 
    duration-300 
    hidden md:flex 
    z-61
+  
  "
>
      {/* Left: The Buzz Button */}
      <button className="flex items-center gap-1 bg-white text-emerald-900 font-semibold text-[0.5rem] sm:text-xs px-2 py-0.5 rounded-full hover:bg-emerald-100 transition">
        THE BUZZ
        <ArrowRight size={12} />
      </button>

     
     {/* Center: Scrolling Marquee Message */}
<div className="overflow-hidden flex-1 mx-40 hidden md:block">
  <div className="marquee whitespace-nowrap text-center text-[1rem] sm:text-xs md:text-sm font-light text-white dark:text-gray-200">
    <span>
      We’ve Rebranded! MSG24x7 is now Qmize - a new identity, the same trusted service.
    </span>
    {/* <span>
      We’ve Rebranded! MSG24x7 is now Qmize - a new identity, the same trusted service. &nbsp; • &nbsp;
    </span> */}
  </div>
</div>


      {/* Right: Menu + Theme Toggle */}
      <div className="flex items-center gap-2 relative">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded-md bg-emerald-800 hover:bg-emerald-700 transition"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={12} /> : <Moon size={12} />}
        </button>

        {/* Menu Wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          {/* Menu Icon */}
          <button className="p-1 rounded-md hover:bg-emerald-800 transition">
            <Menu size={12} />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 top-full mt-2 bg-green-100  border border-emerald-400 rounded-xl shadow-lg flex flex-col gap-2 p-3 w-40 transition-all duration-200 ${
              menuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <button className="bg-emerald-800 text-white font-medium text-xs py-1 rounded-md hover:bg-emerald-700 transition border-b-2 border-green-400">
              Pay Now
            </button>
            <button className="bg-emerald-800 text-white font-medium text-xs py-1 rounded-md hover:bg-emerald-700 transition border-b-2 border-green-400">
              Client Login
            </button>
            <button className="bg-emerald-800 text-white font-medium text-xs py-1 rounded-md hover:bg-emerald-700 transition border-b-2 border-green-400">
              Affiliate Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
