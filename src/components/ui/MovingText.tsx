"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

export function MovingText() {
  return (
    <div className="rounded-md w-full flex flex-col antialiased bg-blue-600 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden z-40">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

export default MovingText

const testimonials = [
  {
    quote:
      "Strategic Insights",
    name: "",
    title: "",
  },
  {
    quote:
      "Operational Success",
    name: "",
    title: "",
  },
  {
    quote:
      "Expert Advice",
    name: "",
    title: "",
  },
  {
    quote:
      "Business Growth",
    name: "",
    title: "",
  },
  {
    quote:
      "Challenges Achieved",
    name: "",
    title: "",
  },
];
