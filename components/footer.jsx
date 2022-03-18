import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  SocialButton,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
} from "@/components/icons";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#FAF8F8", "#141214")}
      color={useColorModeValue("gray.800", "whiteAlpha.900")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 palo-landrae. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Facebook"} href={"#"}>
            <FacebookIcon />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <GitHubIcon />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <InstagramIcon />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
