import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "gray.900");
  return (
    <IconButton
      color={color}
      mx={1}
      bg={bg}
      aria-label="Toggle Mode"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
