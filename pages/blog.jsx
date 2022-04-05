import { prisma } from "./api/prisma";
import { Layout } from "@/components/layout";
import NextLink from "next/link";
import {
  Flex,
  Image,
  Box,
  Center,
  Text,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import moment from "moment";

export default function Blog({ posts }) {
  const bg = useColorModeValue("white", "#211e21");
  const color = useColorModeValue("black", "white");

  return (
    <Layout title={"Blog"}>
      <SimpleGrid mx="auto">
        {posts.map((post) => {
          return (
            <Box
              key={post.id}
              w={"xs"}
              bg={bg}
              color={color}
              shadow={"lg"}
              borderRadius={6}
            >
              <Image w={"xs"} h={214} borderTopRadius={6} src={post.img} />
              <Box px={4} py={2}>
                <Text fontSize="sm" py={2}>
                  Posted on {moment(post.date).format("LL")}
                </Text>
                <Text as="samp" fontSize="lg" mb={2}>
                  {post.title}
                </Text>
                <Text noOfLines={2}>{post.description}</Text>
                <NextLink href={`/blog/${post.slug}`} passHref>
                  <Link>
                    <Button bg="blue.200" my={1}>
                      Read More
                    </Button>
                  </Link>
                </NextLink>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      img: true,
      date: true,
      slug: true,
    },
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
    revalidate: 30,
  };
}
