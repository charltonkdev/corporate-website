import { FaRegCircleDot } from "react-icons/fa6";
import FaqAccordion from "../ui/FaqAccordion";
import Image from "next/image";

export default function Faq() {
    return (
        <section id="faq" className="relative container flex flex-col w-full h-full justify-between py-24 gap-6">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-fit md:w-[50vw] h-fit rounded-3xl overflow-hidden">
                    <Image
                    alt="faq"
                    src="/home/faq.jpg"
                    objectFit="cover"
                    width={570}
                    height={658}
                    />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-[50vw]">
                    <div className="flex flex-col gap-4 w-full md:max-w-xl">
                        <span className="flex gap-3 items-center text-blue-600 uppercase font-semibold">
                            <FaRegCircleDot /> Business Faq
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold w-full">
                            Frequently asked questions
                        </h2>
                        <p>
                        There are questions that you might ask about our business plans and service. Contact us for more info in page <a href="#contact" className="text-blue-600">
                        Contact us
                        </a>
                        </p>
                    </div>
                    <FaqAccordion />
                </div>
            </div>
        </section>
    )
}