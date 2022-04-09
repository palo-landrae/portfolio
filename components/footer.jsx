import { Container, Stack, Text } from "@chakra-ui/react";
import {
  SocialButton,
  YoutubeIcon,
  GitHubIcon,
  InstagramIcon,
} from "@/components/icons";

const Footer = () => {
  return (
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
        <SocialButton label="Youtube" href="https://www.youtube.com/c/Landrae">
          <YoutubeIcon />
        </SocialButton>
        <SocialButton label="GitHub" href="https://github.com/palo-landrae">
          <GitHubIcon />
        </SocialButton>
        <SocialButton
          label="Instagram"
          href="https://www.instagram.com/landrae_dev/"
        >
          <InstagramIcon />
        </SocialButton>
      </Stack>
    </Container>
  );
};

export default Footer;
