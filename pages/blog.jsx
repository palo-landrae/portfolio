import { prisma } from "./api/prisma";
import { Layout } from "@/components/layout";
import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { marked } from "marked";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ node, inline, className, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={useColorModeValue(oneLight, materialDark)}
      PreTag="div"
      className="codeStyle"
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  );
};

export default function Blog({ markdowns }) {
  return (
    <Layout title={"Blog"}>
      <Box mx={"auto"} p={6} rounded={"md"} className="markdown">
        {markdowns.map((blog) => {
          return (
            <div className="markdown-body">
              <ReactMarkdown
                children={blog.contents}
                components={{ code: CodeBlock }}
              />
            </div>
          );
        })}
      </Box>
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
