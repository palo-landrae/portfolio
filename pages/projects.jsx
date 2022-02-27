import { ProjectCards } from "@/components/project-cards";
import { prisma } from "./api/prisma";
import Head from "next/head";
import { Layout } from "@/components/layout";
import { Box } from '@chakra-ui/react'

export default function Projects({ projects }) {
    return (
        <Layout>
            <Head>
                <title>My Projects</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Box className="">
                <ProjectCards projects={projects} />
            </Box>
        </Layout>
    );
}

export async function getStaticProps() {
    const projects = await prisma.projects.findMany();

    return {
        props: {
            projects,
        },
        revalidate: 30,
    };
}
