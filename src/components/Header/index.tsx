'use client'
import { useState, useEffect } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import style from "./style.module.css";
import CreativeButton from "@/components/ui/CreativeButton";
import { clsx } from "clsx";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
    subsets: ["latin"],
});

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isFixed, setIsFixed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMdScreen, setIsMdScreen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down
                setIsVisible(false);
            } else { // if scroll up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
            setIsFixed(window.scrollY > 0);
        }
    };

    const handleResize = () => {
        setIsMdScreen(window.innerWidth >= 768);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);
            window.addEventListener('resize', handleResize);

            // Initial check
            handleResize();

            return () => {
                window.removeEventListener('scroll', controlHeader);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [lastScrollY]);

    const handleMenuClick = (id: string) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`${isMdScreen ? `fixed w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} z-50 ${isFixed ? 'bg-white' : 'bg-transparent'}` : ''}`}>
            <div className="relative flex justify-between items-center container py-7 mx-auto px-6 md:px-6 lg:px-0">
                <div className="flex font-bold text-2xl uppercase">Consul</div>
                <div className="hidden md:flex">
                    <ul className={clsx(dmSans.className, style.menuLink, "flex w-full gap-8 uppercase text-sm")}>
                        <li><Link href="#home" onClick={() => handleMenuClick('home')}>Home</Link></li>
                        <li><Link href="#about-us" onClick={() => handleMenuClick('about-us')}>About Us</Link></li>
                        <li><Link href="#services" onClick={() => handleMenuClick('services')}>Services</Link></li>
                        <li><Link href="#faq" onClick={() => handleMenuClick('faq')}>Faq</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex relative">
                    <CreativeButton>
                        Contact Us
                    </CreativeButton>
                </div>
                <button
                    type="button"
                    className="md:hidden fixed z-50 right-3 flex items-center text-3xl bg-blue-600 p-3 rounded-full"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
                </button>

                <div className={`${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 flex flex-col justify-between px-12`}>
                    <ul className={clsx(dmSans.className, style.menuLink, "flex flex-col justify-center h-full text-left gap-12 font-semibold uppercase mt-20 text-3xl text-black cursor-pointer")}>
                        <li><Link href="#home" onClick={() => handleMenuClick('home')}>Home</Link></li>
                        <li><Link href="#about-us" onClick={() => handleMenuClick('about-us')}>About Us</Link></li>
                        <li><Link href="#services" onClick={() => handleMenuClick('services')}>Services</Link></li>
                        <li><Link href="#faq" onClick={() => handleMenuClick('faq')}>Faq</Link></li>
                    </ul>
                    <div className="flex relative mb-20">
                        <CreativeButton>Contact Us</CreativeButton>
                    </div>
                </div>
            </div>
        </header>
    );
};
