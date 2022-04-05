import { React } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { MenuDropdown } from "./menu-dropdown";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, HStack, VStack, Link, Heading, Text } from "@chakra-ui/react";
import ColorModeToggle from "./color-toggle.tsx";

export const Navbar = () => {
  const router = useRouter();
  const menuData = [
    {
      href: "/projects",
      tabContent: "Projects",
    },
    {
      href: "/about",
      tabContent: "About",
    },
    {
      href: "/blog",
      tabContent: "Blog",
    },
  ];
  const bg = useColorModeValue("white", "#211e21");
  const color = useColorModeValue("black", "white");

  return (
    <Box as="nav" bg={bg} color={color} py={2}>
      <VStack>
        <NextLink href="/" passHref>
          <Link>
            <Heading>Palo Loui Andrae</Heading>
          </Link>
        </NextLink>
        <HStack>
          {menuData.map((menu) => (
            <Link key={menu.href} href={menu.href}>
              <Text px={3}>{menu.tabContent}</Text>
            </Link>
          ))}
          <ColorModeToggle />
        </HStack>
      </VStack>
    </Box>
  );
};
