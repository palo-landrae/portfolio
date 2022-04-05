import { prisma } from "../api/prisma";
import { Layout } from "@/components/layout";
import {
  Flex,
  Image,
  Box,
  Center,
  Text,
  useColorModeValue,
  HStack,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import moment from "moment";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const highlightStyle = useColorModeValue(oneLight, materialDark);
  return !inline && match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={highlightStyle}
      PreTag="div"
      className="codeStyle"
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code {...props}>{children}</code>
  );
};

const Post = ({ post }) => {
  return (
    <Layout title={"Blog"}>
      {post ? (
        <>
          <Flex
            alignSelf={"center"}
            rounded={"md"}
            w="100%"
            maxW="3xl"
            direction={"column"}
            className="markdown"
            key={post.id}
          >
            <Image
              h={60}
              objectFit="cover"
              borderTopRadius={"md"}
              src={post.img}
            />
            <Box p={6}>
              <HStack>
                <Avatar name="palo-landrae" src="/profile.jpg" size="md" />
                <VStack spacing={0} align="start" py={4}>
                  <Text fontWeight="bold">palo-landrae</Text>
                  <Text fontSize="xs">
                    Posted on {moment(post.date).format("LL")}
                  </Text>
                </VStack>
              </HStack>
              <ReactMarkdown components={{ code: CodeBlock }}>
                {post.content}
              </ReactMarkdown>
            </Box>
          </Flex>
        </>
      ) : (
        <Center>Loading...</Center>
      )}
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const getAllPostSlugs = await prisma.blog.findMany({
    select: {
      slug: true,
    },
  });

  const paths = getAllPostSlugs.map((postSlug) => ({
    params: {
      slug: postSlug.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: slug }) {
  const post = await prisma.blog.findUnique({
    where: {
      slug: slug.slug,
    },
    select: {
      id: true,
      title: true,
      description: true,
      img: true,
      date: true,
      content: true,
    },
  });
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 30,
  };
}
