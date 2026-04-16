import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black-100/[0.3]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="px-4 py-1.5 mb-4 rounded-full border border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/10 backdrop-blur-sm">
            <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-center text-brand-primary dark:text-brand-primary/80 font-bold">
              Backend Systems & ML Infrastructure
            </p>
          </div>

          <TextGenerateEffect
            words="Architecting High-Performance Distributed Systems"
            className="text-center text-[40px] md:text-5xl lg:text-7xl tracking-tighter text-brand-primary dark:text-brand-secondary"
          />

          <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl pt-4 text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">
            Hi! I&apos;m <span className="text-brand-primary dark:text-brand-secondary font-bold">Abdul Wahab Ahmed Khan</span>, a Software Engineer specialized in scalable backends and Scientific ML.
          </p>

          <div className="flex gap-5 mt-5 md:mt-0 ">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <Link href="/resume">
              <MagicButton
                title="View Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;