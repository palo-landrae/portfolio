import { Navbar } from "../components/navbar";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
        <p>{projects}</p>
    
      <div className="flex min-h-screen justify-center items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
            <p className="text-grey-darker text-base">
              Next and Tailwind CSS are a match made in heaven, check out this article on how you can combine these two for your next app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:4000/projects')
  const projects = await res.text()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  }
}