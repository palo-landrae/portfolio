import { Box } from "@chakra-ui/react";
import { Layout } from "@/components/layout";
import { Profile } from "@/components/profile";

export default function About() {
  return (
    <Layout title={"About"}>
      <Box>
        <Box className="w-full h-96 overflow-hidden relative">
          <Profile />
        </Box>
      </Box>
    </Layout>
  );
}

