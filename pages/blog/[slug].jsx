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
  Spacer,
  Button,
  Img,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  coldarkDark,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import moment from "moment";
import { LikeButton } from "@lyket/react";
import { TwitterHeart, TwitterHeartEmpty } from "@/components/icons";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const highlightStyle = useColorModeValue(coldarkDark, oneDark);
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
                <Img
                  borderRadius="full"
                  src="/images/profile.jpg"
                  alt="profile picture"
                  w={12}
                  h={12}
                />
                <VStack spacing={0} align="start" py={4}>
                  <Text fontWeight="bold">palo-landrae</Text>
                  <Text fontSize="xs">
                    Posted on {moment(post.date).format("LL")}
                  </Text>
                </VStack>
                <Spacer />
                <LikeButton id={post.slug} namespace="my-blog">
                  {({ handlePress, totalLikes, userLiked, isLoading }) => (
                    <>
                      <Button
                        onClick={handlePress}
                        disabled={isLoading}
                        bg="transparent"
                        leftIcon={
                          userLiked ? (
                            <TwitterHeart w={6} h={6} />
                          ) : (
                            <TwitterHeartEmpty w={6} h={6} />
                          )
                        }
                      >
                        {totalLikes}
                      </Button>
                    </>
                  )}
                </LikeButton>
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
      slug: true,
    },
  });
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
    revalidate: 90,
  };
}
