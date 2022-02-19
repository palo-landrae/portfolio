import { Navbar } from "../components/navbar";
import { ProjectCards } from "../components/project.cards";
import { prisma } from "./api/prisma";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <div className="h-max lg:h-full">
      <Head>
        <title>My Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="dark:bg-gray-800 bg-stone-200 h-full">
        <ProjectCards projects={projects} />
      </div>
    </div>
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
