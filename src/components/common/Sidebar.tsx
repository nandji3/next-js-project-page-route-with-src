import React, { useState } from "react";
import { AiOutlineShopping, AiOutlineAppstore } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [acitveIndex, setActiveIndex] = useState<number>(0);

    const sidebarLinks = [
        {
            name: "Home",
            icon: <FaHome size={24} />,
            link: "/",
        },
        {
            name: "Products",
            icon: <AiOutlineShopping size={24} />,
            link: "/products",
        },
        {
            name: "Categories",
            icon: <AiOutlineAppstore size={24} />,
            link: "/categories",
        },
        {
            name: "Settings",
            icon: <IoSettings size={24} />,
            link: "/categories",
        },
    ];

    return (
        <aside
            className={`bg-gray-200 text-gray-700 sticky top-0 h-screen transition-all duration-400 ease-in-out ${
                collapsed ? "w-16" : "w-64"
            }`}
        >
            <div></div>
            <div className="p-4 grid items-center">
                <div
                    className="mb-4 cursor-pointer mt-1"
                    onClick={() => setCollapsed((prev) => !prev)}
                >
                    <CgMenu size={24} />
                </div>
                <div className="grid grid-cols-1 gap-7 mt-[10vh]">
                    {sidebarLinks.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div
                                className={`flex items-center gap-2 ${
                                    acitveIndex == index
                                        ? "sidebarLinkActive"
                                        : ""
                                }`}
                            >
                                <div>{item.icon}</div>
                                <span
                                    className={`transition-all duration-300 text-pretty font-bold ${
                                        collapsed ? "hidden" : "inline"
                                    } ${
                                        acitveIndex == index
                                            ? "sidebarLinkActive"
                                            : ""
                                    }`}
                                >
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
