"use client";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden flex flex-col items-center">
      {/* Spotlights */}
      <div className="pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black-100/[0.3]
       absolute top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col items-center justify-center relative mt-6 mb-20 z-10 text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        
        {/* Profile Avatar Card */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative rounded-full overflow-hidden size-28 md:size-32 border-4 border-white dark:border-[#000319] bg-slate-900 shadow-2xl">
            <Image
              src="/my_picture.jpg"
              alt="Abdul Wahab Ahmed Khan"
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
          {/* Active Status Badge */}
          <div className="absolute bottom-1.5 right-1.5 bg-emerald-500 border-2 border-white dark:border-[#000319] size-4 rounded-full animate-pulse" title="Available for Work" />
        </div>

        {/* Small Intro Badge */}
        <div className="px-4 py-1.5 mb-4 rounded-full border border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/10 backdrop-blur-sm">
          <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-center text-brand-primary dark:text-brand-primary/80 font-bold">
            Hi, I&apos;m Abdul Wahab Ahmed Khan
          </p>
        </div>

        {/* Text Reveal Title */}
        <TextGenerateEffect
          words="Turn Operational Bottlenecks into Automated Revenue."
          className="text-center text-[32px] md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-brand-primary dark:text-brand-secondary"
        />

        {/* Bio */}
        <p className="text-center md:tracking-wider mb-6 text-sm md:text-base lg:text-lg pt-2 text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">
          AI Automation Engineer & Full-Stack Systems Architect. I build intelligent multi-agent workflows, optimize high-concurrency backends, and fine-tune reasoning LLMs.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-center mt-2">
          <a href="#contact">
            <MagicButton
              title="Book a Call"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <Link href="/resume">
            <MagicButton
              title="View GitHub Resume"
              icon={<FaGithub />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;