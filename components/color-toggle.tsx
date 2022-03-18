import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");
  return (
    <IconButton
      color={color}
      mx={1}
      bg={"transparent"}
      aria-label="Toggle Mode"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
