import { Layout } from "@/components/layout";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Image,
  Center,
  Spacer,
  SimpleGrid,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
export default function Home() {
  return (
    <Layout title={"Home"}>
      <Flex
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        px="auto"
        w="80vw"
        mx="auto"
      >
        <Box maxW={"sm"} h="auto" mx="auto">
          <Image alt="me-tokyo" borderRadius="sm" src="/images/me-tokyo.jpg" />
        </Box>
        <Spacer minW={4} />
        <VStack align="flex-start" mx={"auto"} maxW={96} mb={4}>
          <Heading>Hi,</Heading>
          <Text>Welcome to my portfolio.</Text>
          <Text>I&#39;m a student developer based in Milan, Italy</Text>
          <Text as="samp">
            At the moment I&#39;m interested in ReactJS and minimal design.
          </Text>
          <Text as="samp">
            Feel free to explore my portfolio & tell me what you think about it!
          </Text>
        </VStack>
        <Spacer />
      </Flex>
      <Flex w="80vw" mx="auto" mt={24} direction="column">
        <Text as="samp" fontSize={32}>
          Recent works
        </Text>
        <Wrap spacing={4}>
          <WrapItem>
            <Box maxW={"xs"} h={"auto"} textAlign={"center"}>
              <Text>SDG14</Text>
              <Image alt="work1" borderRadius="sm" src="/images/sdg14.png" />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box maxW={"xs"} h={"auto"} textAlign={"center"}>
              <Text>Cycle Path Finder</Text>
              <Image
                alt="work2"
                borderRadius="sm"
                src="/images/cycle-path-finder.png"
              />
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Layout>
  );
}
