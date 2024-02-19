import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="logo dark:bg-dark-blue flex items-center justify-between bg-white px-4 py-8 lg:px-20">
      <div>
        <Link className="text-dark font-extrabold dark:text-white " href={"/"}>
          Where is in the World?
        </Link>
      </div>
      <div className="theme-switcher">
        <button className="flex items-center justify-center gap-2 font-semibold dark:text-white">
          <MdOutlineDarkMode /> Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
