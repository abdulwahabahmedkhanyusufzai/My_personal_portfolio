import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/TextGenerate";
import { AnimatedGridPattern } from "./ui/AnimatedgridBg";
import {cn} from "@/app/lib/utils/cn";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
        <div>
        <Spotlight
          className="-top-[1200px] left-0 md:left-[16%] md:-top-[15%]"
          fill="white"
          
        />
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
          <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-90">
            Craftying Digital Experiences with Modern Web Tech
          </p>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="First Impression is Last so Make it Count"
            className="font-inter  text-center text-[40px] md:text-5xl lg:text-6xl  max-w-[800px] font-extrabold"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Abdul Wahab, a Full Stack Developer who use MERN.
          </p>
          <div className="flex gap-5 mt-5 md:mt-0 ">
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="https://drive.google.com/file/d/1CyfyVlM4A008byVWlUAPyW-6JWWo712t/view?usp=sharing">
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