'use client'
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import style from "./style.module.css";
import  CreativeButton  from "@/components/ui/CreativeButton";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="relative flex justify-between items-center container py-7 -mb-24 mx-auto px-6 md:px-0 z-50">
            <div className="flex font-bold text-2xl uppercase">Consul</div>
            <div className="hidden md:flex">
                <ul className="flex w-full gap-8 font-semibold uppercase">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="hidden md:flex relative">
                <CreativeButton>
                    Contact Us
                </CreativeButton>
            </div>
            <button
                type="button"
                className="md:hidden flex items-center text-3xl z-50 bg-blue-600 p-3 rounded-full"
                onClick={toggleMenu}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between px-12`}>
                <ul className="flex flex-col text-left gap-12 font-semibold uppercase mt-20 text-3xl text-black">
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}>Home</li>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}>About Us</li>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}>Home</li>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}>Services</li>
                </ul>
                <div className="flex relative mb-20">
                    <button
                        type="button"
                        className={`${style.btnAnimate} px-5 py-2 rounded-full uppercase font-semibold flex relative z-30 bg-blue-600 overflow-hidden group/btnA`}>
                        <span className="z-20 flex gap-2 group-hover/btnA:text-black duration-500">
                            Contact Us
                            <FiArrowUpRight
                                className="text-2xl"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};
