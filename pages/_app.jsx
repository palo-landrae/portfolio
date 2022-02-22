import "../styles/globals.css";
import { ThemeWrapper } from "../context/theme";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeWrapper>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeWrapper>
    );
}

export default MyApp;
