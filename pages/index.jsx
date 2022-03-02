import Head from "next/head";
import { Profile } from "@/components/profile";
import { Layout } from "@/components/layout";

export default function Home() {
    return (
        <Layout title={'Home'}>
            <div>
                <div className='w-full h-96 overflow-hidden relative'>
                    <Profile />
                </div>
            </div>
        </Layout>
    );
}
