import Image from "next/image";
import { companyList } from "@/data";

export default function Company() {
    return (
        <div className="flex relative flex-col w-full h-[20vh] justify-end">
            <p>
                More than <span className="text-blue-600">100+</span> companies choose us for business solution.
            </p>
            <div className="flex justify-between items-center gap-6 my-12 pt-6">
                {companyList.map((item, i) => (
                    <div key={item.id} className="">
                    <Image
                    src={item.src}
                    alt=""
                    width={187}
                    height={40}
                    objectFit="cover"
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}