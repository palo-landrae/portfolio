import { Avatar, Box, Heading, Flex, Container } from "@chakra-ui/react";

export const Profile = () => {
    return (
        <Container maxW='container.md'>
            <Box display={{ md: "flex" }} className='md:mx-16'>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Palo Loui Andrae
                    </Heading>
                    <p>Full Stack Web Developer, Gamer, Musician</p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign='center'>
                    <Box
                        borderColor='whiteAlpha.800'
                        borderWidth={2}
                        borderStyle='solid'
                        w='100px'
                        h='100px'
                        display='inline-block'
                        borderRadius='full'
                        overflow='hidden'>
                        <Avatar size='xl' name='Dan Abrahmov' src='/profile.jpg' />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
