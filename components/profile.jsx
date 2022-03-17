import {
  Avatar,
  Box,
  Heading,
  Flex,
  Container,
  Text,
  Img,
} from "@chakra-ui/react";
import "@fontsource/m-plus-rounded-1c/400.css";
import { useColorModeValue } from "@chakra-ui/color-mode";

export const Profile = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.md" mx="auto">
      <Box display={{ md: "flex" }} className="md:mx-20">
        <Box flexGrow={1}>
          <Heading>Palo Loui Andrae</Heading>
          <p>Full Stack Web Developer, Gamer, Musician</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Img
              borderRadius="full"
              src="/profile.jpg"
              alt="Profile Picture"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Heading>Bio</Heading>
        </Box>
      </Box>
    </Container>
  );
};
