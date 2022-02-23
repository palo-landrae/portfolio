import "../styles/globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
