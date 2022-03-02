import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: 'M PLUS Rounded 1c'
    },
    config: {
        useSystemColorMode: true,
    },
});

export default theme;
