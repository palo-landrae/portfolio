import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "#141214")(props),
    },
  }),
};
const config = {
  initialColorMode: mode("light", "dark"),
  useSystemColorMode: false,
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'Kodchasan'",
};

const theme = extendTheme({ config, styles, fonts });

export default theme;
