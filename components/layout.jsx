import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const Layout = ({ children, title }) => {
    return (
        <Box className='bg-dawn dark:bg-midnight text-midnight dark:text-white'>
            <Navbar />
            <Box pt={24}>
                {children}
                <Footer />
            </Box>
        </Box>
    );
};
