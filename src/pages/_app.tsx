import type { AppProps } from "next/app";
import "../styles/globals.css";
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <main className="p-4">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default MyApp;
