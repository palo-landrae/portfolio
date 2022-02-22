import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { ThemeButton } from "./theme-changer";

export const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const menuData = [
    {
      href: "/",
      tabContent: "Home",
    },
    {
      href: "/projects",
      tabContent: "Projects",
    },
    {
      href: "/about",
      tabContent: "About Me",
    },
    {
      href: "/resume",
      tabContent: "Resume",
    },
  ];

  const handleSelect = (index) => {
    console.log(index)
    currentIndex = index;
  };

  return (
    <nav className="flex items-center flex-wrap p-3 dark:bg-metal bg-dawn-nav dark:text-white text-dawn-text">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 mr-2 fill-current" viewBox="0 0 512 512">
            <path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z" />
          </svg>
          <span className="text-xl font-bold capitalize tracking-wide text-dawn-title dark:text-white">Palo Landrae</span>
        </a>
      </Link>
      <div className="flex inline-flex  ml-auto lg:hidden">
        <ThemeButton />
        <button
          className="inline-flex p-3 hover:bg-gray-500 rounded dark:text-white text-black ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {menuData.map((menu) => (
            <Link key={menu.href} href={menu.href}>
              <a className={`${router.pathname === menu.href ? "underline underline-offset-4" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-neutral-300 dark:hover:bg-gray-600`}>{menu.tabContent}</a>
            </Link>
          ))}
          <ThemeButton show={active} />
        </div>
      </div>
    </nav>
  );
};
