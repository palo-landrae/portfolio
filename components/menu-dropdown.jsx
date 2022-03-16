import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Link,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const MenuDropdown = () => {
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
      tabContent: "About",
    },
    {
      href: "/resume",
      tabContent: "Resume",
    },
  ];

  const color = useColorModeValue("black", "white");

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        borderColor="transparent"
        color={color}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Options"
      />
      <MenuList>
        {menuData.map((menu) => (
          <NextLink key={menu.href} href={menu.href} passHref>
            <MenuItem
              sx={{
                ":focus:not(:focus-visible)": {
                  boxShadow: "none !important",
                  backgroundColor: "transparent !important",
                },
              }}
              as={Link}
            >
              <span
                className={
                  router.pathname === menu.href
                    ? "underline underline-offset-4"
                    : ""
                }
              >
                {menu.tabContent}
              </span>
            </MenuItem>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  );
};
