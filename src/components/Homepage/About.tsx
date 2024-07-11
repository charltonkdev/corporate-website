'use client'

import { useRef } from 'react';
import useGsapFadeInUp from "../../lib/utils/hooks/useGsapFadeInUp";
import { serviceItems, tabContent } from "../../data";
import CreativeBtn from '../ui/CreativeButton';
import Tab from '../ui/Tab';
import { FaRegCircleDot } from "react-icons/fa6";
import Image from 'next/image';

export default function About() {
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const spanRef = useRef(null);

    const refs = [titleRef, textRef, spanRef];

    useGsapFadeInUp(refs, 0.2);

    return (
        <section id="about" className="relative container flex flex-col w-full h-full items-center py-24 gap-6">
            <div className="flex flex-col md:flex-row items-end gap-12 pb-6 justify-evenly">
                <div className="flex flex-col gap-4 w-full md:w-[50%]">
                    <span className="flex gap-3 items-center text-blue-600 uppercase font-semibold">
                        <FaRegCircleDot /> Who We Are
                    </span>
                    <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold w-full">
                        How We Work on Solving All Business Issues
                    </h2>
                </div>
                <p ref={textRef} className="text-xl w-full md:w-[50%]">
                    Our expert team collaborates closely with you, providing tailored solutions and strategic insights to effectively address and resolve all your business challenges.
                </p>
            </div>

            <div ref={spanRef} className="flex flex-col md:flex-row justify-evenly gap-24">
                {serviceItems.map((item, i) => (
                    <div key={item.id} className="flex flex-col gap-4 border-t-2 pt-6">
                        <h3 className="text-2xl font-semibold">{
                            item.title}
                        </h3>
                        <span className="text-6xl uppercase font-semibold text-blue-600">
                            {item.number}
                        </span>
                        <p className="text-gray-500">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex relative flex-col md:flex-row gap-24 pb-6 items-center justify-center py-24">
                <div className="flex flex-col gap-4 w-full md:w-[50%]">
                    <span className="flex gap-3 items-center text-blue-600 uppercase font-semibold">
                        <FaRegCircleDot /> Expert Consultants
                    </span>
                    <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold w-full">
                        Join our expert guide on business consulting
                    </h2>
                    <p ref={textRef} className="text-lg mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                    <CreativeBtn>Read More</CreativeBtn>
                </div>
                <div className="flex flex-col w-full md:w-[50%] rounded-3xl overflow-hidden">
                    <Image
                        alt="joinbg"
                        src="/home/joinbg.webp"
                        width={1280}
                        height={720}
                    />
                </div>
            </div>

            <div className="flex relative flex-col-reverse md:flex-row gap-24 pb-6 h-full md:h-screen items-center md:justify-center py-24">
                <div className="flex flex-col h-[30vh] md:h-fit w-full md:w-fit rounded-3xl overflow-hidden">
                    <Image
                        alt="joinbg"
                        src="/home/whyus.webp"
                        width={600}
                        height={692}
                        className='z-10'
                    />
                    <div className="hidden md:flex bg-blue-600 rounded-3xl w-[50vw] h-full absolute -left-[35%]  top-0" />
                </div>
                <div className="flex flex-col gap-4 w-full  justify-center md:w-[50%]">
                    <span className="flex gap-3 items-center text-blue-600 uppercase font-semibold">
                        <FaRegCircleDot /> Why Us
                    </span>
                    <h2 ref={titleRef} className="text-4xl lg:text-5xl font-bold w-full mb-10">
                        Get expert advice for your business success
                    </h2>
                    <p ref={textRef} className="text-lg mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                    <Tab />
                    <p className="text-sm mb-10">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <CreativeBtn>Contact Us</CreativeBtn>
                </div>
            </div>
        </section>
    )
}