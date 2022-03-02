import { Box, Text, Button, Stack, Flex, SimpleGrid, Spacer, Link } from "@chakra-ui/react";
import { GitHubIcon } from "./icons";

export const Cards = ({ projects }) => {
    return (
        <SimpleGrid mx='auto' mt={10} px={10} minChildWidth={238} spacingX={8} spacingY={6}>
            {projects.map((project) => {
                return (
                    <Box mx='auto' w={256} borderWidth='1px' borderRadius='lg' overflow='hidden' bg='teal.800'>
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Box
                                    color='white'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='md'
                                    textTransform='uppercase'>
                                    {project.title}
                                </Box>
                            </Box>
                            <Box mt={1} mb={2} as='p' lineHeight='tight' h='72px' noOfLines={3} color='white'>
                                {project.description}
                            </Box>

                            <Flex justify='end'>
                                <a target='_blank' href={project.demo} rel='noopener noreferrer'>
                                    <Button mx={1} colorScheme='teal' size='sm'>
                                        Demo
                                    </Button>
                                </a>
                                <a target='_blank' href={project.git_repo} rel='noopener noreferrer'>
                                    <Button mx={1} colorScheme='teal' size='sm' leftIcon={<GitHubIcon boxSize={5} />}>
                                        Source
                                    </Button>
                                </a>
                            </Flex>
                        </Box>
                    </Box>
                );
            })}
        </SimpleGrid>
    );
};
