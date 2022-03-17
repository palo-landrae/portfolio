import Head from "next/head";
import { Profile } from "@/components/profile";
import { Layout } from "@/components/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/react";
export default function Home() {
  const bg = useColorModeValue("white", "black");
  return (
    <Layout title={"Home"}>
      <Box>
        <Box className="w-full h-96 overflow-hidden relative">
          <Profile />
        </Box>
      </Box>
    </Layout>
  );
}
