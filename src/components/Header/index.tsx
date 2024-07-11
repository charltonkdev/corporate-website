'use client'
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import style from "./style.module.css";
import  CreativeButton  from "@/components/ui/CreativeButton";
import { clsx } from "clsx";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
  });

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="relative flex justify-between items-center container py-7 -mb-28 md:-mb-24 mx-auto px-6 md:px-6 lg:px-0 z-50">
            <div className="flex font-bold text-2xl uppercase">Consul</div>
            <div className="hidden md:flex">
                <ul className={clsx(dmSans.className ,style.menuLink, "flex w-full gap-8 uppercase text-sm")}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">About Us</a></li>
                    <li><a href="#home">Services</a></li>
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
                {menuOpen ? <FiX className="text-white"/> : <FiMenu className="text-white"/>}
            </button>

            <div className={`${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between px-12`}>
                <ul className={clsx(dmSans.className ,style.menuLink, "flex flex-col justify-center h-full text-left gap-12 font-semibold uppercase mt-20 text-3xl text-black")}>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}><a href="#home">Home</a></li>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}><a href="#about-us">About Us</a></li>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <li onClick={toggleMenu}><a href="#services">Services</a></li>
                </ul>
                <div className="flex relative mb-20">
                    <CreativeButton>Contact Us</CreativeButton>
                </div>
            </div>
        </header>
    );
};
