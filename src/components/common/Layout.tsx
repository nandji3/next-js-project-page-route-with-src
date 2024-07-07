import React, { ReactNode } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <header className="col-span-full">
                <Header />
            </header>
            <aside className="hidden lg:block col-span-2">
                <Sidebar />
            </aside>
            <main className="col-span-full lg:col-span-4">{children}</main>
            <footer className="col-span-full">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
