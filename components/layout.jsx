import Head from "next/head";
import { Box, Container, Spacer, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const Layout = ({ children, title }) => {
    return (
        <Flex direction='column' minH='100vh' className='bg-dawn dark:bg-midnight text-midnight dark:text-white'>
            <Head>
                <title>{title} - Palo Landrae</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <Flex pt={24} direction='column'>
                {children}
            </Flex>
            <Spacer />
            <Footer />
        </Flex>
    );
};
