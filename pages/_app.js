import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    property="og:image"
                    content="/covers/Kitchen Flowers.webp"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
