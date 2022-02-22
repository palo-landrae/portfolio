
import { createPopper } from "@popperjs/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, createRef} from "react";
export const Dropdown = ({ show }) => {
    // dropdown props
    const router = useRouter();
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
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
    return (
        <>
            <div className='flex flex-wrap m-0'>
                <div className='w-full sm:w-6/12 md:w-4/12'>
                    <div className='relative inline-flex align-middle w-full'>
                        <button
                            className='inline-flex p-3 hover:bg-gray-500 rounded dark:text-white text-black ml-auto hover:text-white outline-none'
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                            }}>
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "bg-midnight text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                            }>
                            {menuData.map((menu) => (
                                <Link key={menu.href} href={menu.href}>
                                    <a
                                        className={(router.pathname === menu.href ? "underline underline-offset-4" : "") +
                                            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                                        }>
                                        {menu.tabContent}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
