import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`flex flex-col items-center justify-between p-24 text-4xl font-bold ${inter.className}`}
        >
            Welcome to My Next Js Project
        </main>
    );
}
