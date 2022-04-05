import { prisma } from "../api/prisma";
import { Layout } from "@/components/layout";
import { Flex, Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

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

const Post = ({ posts }) => {
  return (
    <Layout title={"Blog"}>
      {posts.map((post) => {
        return (
          <Flex
            alignSelf={"center"}
            rounded={"md"}
            w="100%"
            maxW="3xl"
            direction={"column"}
            p={6}
            className="markdown"
            key={post.id}
          >
            <ReactMarkdown components={{ code: CodeBlock }}>
              {post.content}
            </ReactMarkdown>
          </Flex>
        );
      })}
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
  const posts = await prisma.blog.findMany({
    where: {
      slug: { equals: slug.slug },
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
      posts: JSON.parse(JSON.stringify(posts)),
    },
    revalidate: 30,
  };
}
