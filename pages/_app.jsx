import "../styles/globals.css";
import Fonts from "@/components/font";
import { Chakra } from "../lib/Chakra";
import { Provider } from "@lyket/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider apiKey="pt_092639025d902fdad5bc16fbd39d16">
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Component {...pageProps} />
      </Chakra>
    </Provider>
  );
}

export default MyApp;
