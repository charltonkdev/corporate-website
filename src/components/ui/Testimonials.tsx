"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
const people = [
  {
    id: 1,
    name: "Alex Badwin",
    designation: "Business Development",
    image:
      "/testimonials/person01.jpg",
  },
    
  {
    id: 2,
    name: "Samantha Lily",
    designation: "Business Accountant",
    image:
      "/testimonials/person02.jpg",
  },
  {
    id: 3,
    name: "Joe Smith",
    designation: "Data Analyst",
    image:
     "/testimonials/person03.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="flex flex-row items-center justify-center w-fit">
      <AnimatedTooltip items={people} />
    </div>
  );
}
