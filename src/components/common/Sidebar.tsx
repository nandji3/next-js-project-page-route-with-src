import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineShopping,
    AiOutlineAppstore,
} from "react-icons/ai";
import Link from "next/link";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [acitveIndex, setActiveIndex] = useState<number>(0);

    const sidebarLinks = [
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
    ];

    return (
        <aside
            className={`bg-gray-200 text-gray-700 sticky top-0 h-screen transition-all duration-300 ${
                collapsed ? "w-16" : "w-64"
            }`}
        >
            <div className="p-4">
                <div
                    className="mb-4 cursor-pointer mt-2"
                    onClick={() => setCollapsed((prev) => !prev)}
                >
                    <AiOutlineMenu size={24} />
                </div>
                <div className="grid grid-cols-1 gap-4 mt-6">
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
                                    className={`transition-all duration-300 ${
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
