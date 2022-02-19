import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="dark:bg-stone-800 h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full h-96 overflow-hidden relative">
        <Image
          src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          width="1260"
          height="750"
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
