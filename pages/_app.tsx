import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            offset: 50,
            duration: 500,
        });
    }, []);

    return <Component {...pageProps} />;
}
