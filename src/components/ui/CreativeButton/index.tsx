import type React from "react";
import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import style from "./style.module.css";

type CreativeBtnProps = {
    children: ReactNode;
};

const CreativeBtn: React.FC<CreativeBtnProps> = ({ children }) => {
    return (
        <button
            type="button"
            className={`${style.btnAnimate} w-fit h-fit  px-5 py-2 rounded-full uppercase font-semibold flex relative z-30 bg-blue-600 overflow-hidden group/btnA`}
        >
            <span className="z-20 flex gap-2 text-white">
                {children}
                <FiArrowUpRight className="text-2xl" />
            </span>
        </button>
    );
};

export default CreativeBtn;
