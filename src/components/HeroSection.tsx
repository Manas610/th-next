"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import Link from "next/link";


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] mx-auto py-10 md:py-0 w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative w-full pt-20 z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Tycoon Hamlet
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <div className="mt-16">
          <Link href={"/contact-us"}>
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
