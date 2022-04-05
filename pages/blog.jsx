import { prisma } from "./api/prisma";
import { Layout } from "@/components/layout";
import {
  Spacer,
  Flex,
  Box,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
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
    <code className={className} {...props} />
  );
};

export default function Blog({ markdowns }) {
  return (
    <Layout title={"Blog"}>
      <Flex>
        <Spacer />
        <Box maxW="3xl" p={6} rounded={"md"} className="markdown">
          {markdowns.map((blog) => {
            return (
              <Flex w="100%" direction={"column"} key={blog.id}>
                <ReactMarkdown components={{ code: CodeBlock }}>
                  {blog.contents}
                </ReactMarkdown>
              </Flex>
            );
          })}
        </Box>
        <Spacer />
      </Flex>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdowns = await prisma.markdowns.findMany();
  return {
    props: {
      markdowns,
    },
    revalidate: 30,
  };
}
