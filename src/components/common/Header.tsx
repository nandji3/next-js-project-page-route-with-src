import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-8 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Your Website</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-gray-300"
                            >
                                Contact
                            </Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
