import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { flashless } from "chakra-ui-flashless";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "#141214")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Link: {
    baseStyle: () => ({
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'Kodchasan'",
};

const theme = extendTheme(flashless({ config, styles, fonts, components }));

export default theme;
