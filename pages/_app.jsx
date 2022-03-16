import "../styles/globals.css";
import Fonts from "@/components/font";
import { Chakra } from "../lib/Chakra";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
