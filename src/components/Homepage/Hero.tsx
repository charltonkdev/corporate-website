'use client';
import Image from 'next/image';
import { useRef } from 'react';
import CreativeButton from "@/components/ui/CreativeButton";
import Testimonials from "../ui/Testimonials";
import useGsapFadeInUp from "../../lib/utils/hooks/useGsapFadeInUp";
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';

export default function Hero() {
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const testimonialRef = useRef(null);
    const spanRef = useRef(null);
    const imgRef = useRef(null);

    const refs = [titleRef, textRef, buttonRef, testimonialRef, spanRef, imgRef];

    // Directly use the hook here
    useGsapFadeInUp(refs, 0.2);

    return (

        <section id="home" className="flex w-full h-screen items-center relative">
            <div className='relative container h-full flex flex-col-reverse md:flex-row items-center w-full z-30'>
                <div className="flex flex-col z-20">
                    <h1 ref={titleRef} className="text-4xl md:text-8xl font-semibold max-w-5xl mb-5 text-slate-800">
                        Your Personal Business Consultant
                    </h1>
                    <p ref={textRef} className="text-xl ww-full md:max-w-xl leading-relaxed mb-12">
                        By doing a business analysis of these statements, you can see whether you have enough business capital.
                    </p>
                    <div className="flex relative gap-6 items-center">
                        <div ref={buttonRef}>
                            <CreativeButton>Join Now</CreativeButton>
                        </div>
                        <div ref={testimonialRef}>
                            <Testimonials />
                        </div>
                        <span ref={spanRef} className="text-sm">+10k Clients</span>
                    </div>
                </div>
                <div ref={imgRef} className="relative md:absolute right-0 bottom-0 flex flex-col h-fit w-fit z-10 mb-6 md:mb-0">
                    <Image
                        alt=""
                        src="/hero.png"
                        width={657}
                        height={804}
                        className=''
                    />
                </div>
            </div>
            <BackgroundGradientAnimation />
        </section>
    );
}