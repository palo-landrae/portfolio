import "../styles/globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ChakraProvider>
    );
}

export default MyApp;
