import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("#FAF8F8", "#141214")(props),
    },
  }),
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "'Share Tech Mono'",
  body: "'Share Tech Mono'",
};

const theme = extendTheme({ config, styles, fonts });

export default theme;
