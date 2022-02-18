import { Navbar } from "../components/navbar";
import Head from "next/head";
import { ProjectCards } from "../components/project.cards";
import { prisma } from "./api/prisma";

export default function Projects({projects}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProjectCards projects={projects}/>
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
