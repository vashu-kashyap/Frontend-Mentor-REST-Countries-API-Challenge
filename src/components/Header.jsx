"use client";
import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme("light");
  const [isClient, setIsClient] = useState(false);

  const handleToggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="logo flex items-center justify-between bg-white px-4 py-8 dark:bg-dark-blue lg:px-20">
      <div>
        <Link className="text-dark font-extrabold dark:text-white " href={"/"}>
          Where is in the World?
        </Link>
      </div>
      <div className="theme-switcher">
        <button
          className="flex items-center justify-center gap-2 font-semibold dark:text-white"
          onClick={handleToggleMode}
        >
          {theme === "light" ? (
            <MdOutlineDarkMode className="animate-pulse text-2xl" />
          ) : (
            <CiLight className="animate-spin text-2xl" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
