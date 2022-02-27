import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className='bg-dawn dark:bg-midnight text-midnight dark:text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
