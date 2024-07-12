import clsx from "clsx";
import { FaTelegramPlane } from "react-icons/fa";
import style from "./style.module.css";
import { FaFacebook, FaSlack } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className={clsx(style.footerContainer, "relative h-full w-full bg-blue-600 flex flex-col lg:flex-row px-6 mt-32 text-white")}>
            <div className="flex flex-col w-full lg:w-[35%] justify-between border-b lg:border-b-0 lg:border-r px-6 py-12">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold mb-3">Consul</span>
                    <p className="mb-6">Transforming Your Business with Insight and Strategy.</p>
                    <form className="flex gap-4 px-6 py-2 border w-fit rounded-full mb-16 relative">
                        <input type="text" placeholder="your email address" className="text-sm pr-6 bg-transparent text-white placeholder:text-white outline-none" />
                        <button type="button"><FaTelegramPlane /></button>
                    </form>

                </div>
                <span>
                    2024. Consul.
                </span>
            </div>
            <div className="flex items-start flex-col w-full lg:w-[20%] border-b lg:border-b-0 lg:border-r px-6 py-12">
                <h4 className="font-semibold mb-12 text-xl">Quick Links</h4>
                <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="flex items-start flex-col w-full lg:w-[20%] border-b lg:border-b-0 lg:border-r px-6 py-12">
                <h4 className="font-semibold mb-12 text-xl">Useful Links</h4>
                <ul className="flex flex-col gap-3 cursor-pointer">
                    <li>Strategic Planning</li>
                    <li>Operational Improvement</li>
                    <li>Market Analysis</li>
                    <li>Financial Advisory</li>
                </ul>
            </div><div className="flex items-start flex-col w-full lg:w-[20%] px-6 py-12">
                <h4 className="font-semibold mb-12 text-xl">Let&apos;s Connect</h4>
                <span className="pb-4">Connect to us for latest update and more information that will help you.</span>
                <div className="flex gap-6 text-3xl">
                    <span><a href="https://facebook.com" target="_blank" rel="noreferer"><FaFacebook /></a></span>
                    <span><a href="https://slack.com" target="_blank" rel="noreferer"><FaSlack /></a></span>
                    <span><a href="https://twitter.com" target="_blank"><FaXTwitter /></a></span>
                    <span><a href="https://instagram.com" target="_blank"><PiInstagramLogo /></a></span>
                </div>
            </div>
        </footer>
    )
}