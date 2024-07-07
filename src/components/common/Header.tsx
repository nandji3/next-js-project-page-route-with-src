import Link from "next/link";
import React from "react";

const linksData = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "About",
        url: "/about",
    },
    {
        text: "Contact",
        url: "/contact",
    },
];

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-8 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-teal-300">
                        My Store
                    </h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        {linksData?.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url}>
                                    <div className="hover:text-gray-300">
                                        {link.text}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
