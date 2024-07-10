"use client";

import { cn } from "@/lib/utils/cn";
import React, { useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";
import { GoDotFill } from "react-icons/go";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name?: string;
    title?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // biome-ignore lint/complexity/noForEach: <explanation>
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex  min-w-full justify-evenly gap-4 py-4 w-full flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:false]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={`${dm_sans.className} flex items-center justify-evenly w-fit h-fit max-w-full relative rounded-2xl flex-shrink-0 gap-14 px-8`}
            
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className=" relative z-20 leading-[1.6] text-white text-2xl font-bold">
                {item.quote}
              </span>
              <div className="relative z-20 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
            <GoDotFill className="text-2xl text-white"/>
          </li>
        ))}
        
      </ul>
    </div>
  );
};
