import Image from "next/image";
import { services } from "@/data";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";

export default function Services() {
    return (
        <section id="services" className="flex flex-col container w-full h-full">
            <div className="flex flex-col w-full h-full ">
                <div className="flex flex-col gap-4 w-full h-full md:w-[50%] mb-12">
                    <span className="flex gap-3 items-center text-blue-600 uppercase font-semibold">
                        <FaRegCircleDot /> What We Offer
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold w-full">
                    We provide many types of business plan and strategy
                    </h2>
                </div>
                {services.map((item, i) => (
                    <div key={item.id} className="flex justify-between gap-6 group/slist mb-12 pt-6 border-t border-gray-300 cursor-pointer">
                        <div className="flex relative flex-col w-full md:w-[50%] overflow-hidden">
                            <div className="flex gap-5 items-center pb-3 group-hover/slist:text-blue-600 duration-150">
                                <span className="text-xl md:text-2xl">{item.numbering}</span>
                                <p className="text-2xl md:text-3xl font-bold ">{item.title}</p>
                            </div>
                            <div className="h-0 overflow-hidden group-hover/slist:h-[50px] transition-all duration-150 ">{item.description}</div>
                        </div>
                        <div className="w-[300px] h-[400px] overflow-hidden hidden md:block absolute right-[20%] rounded-3xl">
                            <Image
                                alt={item.title}
                                src={item.src}
                                layout="fill"
                                objectFit="cover"
                                className="opacity-0 group-hover/slist:opacity-100 translate-x-[100%] group-hover/slist:translate-x-0 duration-150"
                            />
                        </div>
                        <MdOutlineArrowOutward className="text-[80px] p-6 rounded-full group-hover/slist:text-white group-hover/slist:bg-blue-600 duration-150" />
                    </div>
                ))}

            </div>
        </section>
    )
}