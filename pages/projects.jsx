import { ProjectCards } from "@/components/project-cards";
import { prisma } from "./api/prisma";
import Head from "next/head";
import { Layout } from "@/components/layout";
import { Box } from '@chakra-ui/react'
import { Cards } from "@/components/cards";

export default function Projects({ projects }) {
    return (
        <Layout title={'Works'}>
            <Box className="">
                <Cards projects={projects} />
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
