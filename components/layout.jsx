import Head from "next/head";
import { Spacer, Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const Layout = ({ children, title }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Head>
        <title>{title} - Palo Landrae</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Flex pt={24} direction="column">
        {children}
      </Flex>
      <Spacer />
      <Footer />
    </Flex>
  );
};
