import { Box, Heading, Container, Img } from "@chakra-ui/react";
import { BioSection, BioYear } from "@/components/bio";

export const Profile = () => {
  return (
    <Container maxW="container.md" mx="auto">
      <Box display={{ md: "flex" }} mx={{ md: 6 }}>
        <Box flexGrow={1}>
          <Heading>Palo Loui Andrae</Heading>
          <p>Full Stack Web Developer, Gamer, Musician</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          mx={{ md: 6 }}
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
      <Box mx={{ md: 6 }}>
        <Box>
          <Heading>Bio</Heading>
        </Box>
        <BioSection>
          <BioYear>2022</BioYear>
          Diploma in Information Technology in Istituto di Istruzione Superiore
          Luigi Galvani, Milan
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Corso Forma.Temp in Ricerca Attiva Lavoro, Randstad Spa
        </BioSection>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Talisay, Philippines
        </BioSection>
      </Box>
    </Container>
  );
};
