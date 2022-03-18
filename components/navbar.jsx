import { React } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuDropdown } from "./menu-dropdown";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/react";
import ColorModeToggle from "./color-toggle.tsx";
import { LaptopCodeIcon } from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();
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
  const bg = useColorModeValue("white", "#211e21");
  const color = useColorModeValue("black", "white");

  return (
    <Box
      as="nav"
      bg={bg}
      color={color}
      className="flex fixed z-10 backdrop-blur-md w-full items-center justify-between flex-wrap p-3 overflow-x-clip"
    >
      <div className="mx-auto flex inline-flex max-w-screen-lg">
        <Link href="/">
          <a className="inline-flex items-center p-2 2xsm:mr-8 xsm:mr-20 md:mr-32">
            <span className="text-xl font-bold capitalize tracking-wide">
              &lt;Palo Landrae /&gt;
            </span>
          </a>
        </Link>

        <div className="flex inline-flex py-1 flex-row ml-auto md:hidden">
          <ColorModeToggle />
          <MenuDropdown />
        </div>

        <div className="hidden md:block md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
          {menuData.map((menu) => (
            <Link key={menu.href} href={menu.href}>
              <a
                className={`${router.pathname === menu.href
                    ? "underline underline-offset-4"
                    : ""
                  } md:inline-flex md:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-neutral-300 dark:hover:bg-gray-600`}
              >
                {menu.tabContent}
              </a>
            </Link>
          ))}
          <ColorModeToggle />
        </div>
      </div>
    </Box>
  );
};
