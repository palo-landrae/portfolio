import "../styles/globals.css";
import { ThemeWrapper } from "../context/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
