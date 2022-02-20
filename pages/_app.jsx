import "../styles/globals.css";
import { ThemeWrapper } from "../context/theme";
import { Navbar } from "@/components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Navbar />
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
