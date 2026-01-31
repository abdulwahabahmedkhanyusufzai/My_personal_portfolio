import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/TextGenerate";
import { AnimatedGridPattern } from "./ui/AnimatedgridBg";
import { cn } from "@/app/lib/utils/cn";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
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
      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
          "w-[80%] h-[90vh] absolute top-0 left-1/2 transform -translate-x-1/2"
        )}
      />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Crafting High-Performance Web & AI Solutions
          </p>

          <TextGenerateEffect
            words="Building Scalable Digital Experiences with Modern Tech"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl pt-4 text-white-100 font-light">
            Hi! I&apos;m Abdul Wahab, a Junior Software Engineer & Open Source Contributor.
          </p>
          <div className="flex gap-5 mt-5 md:mt-0 ">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="https://drive.google.com/file/d/1LNW7oXhj1-IqjHJQ510Ge85FPOI8_Zm6/view?usp=sharing">
              <MagicButton
                title="Download Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;