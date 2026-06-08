import { FaLocationArrow } from "react-icons/fa6";

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

      <div className="flex justify-center relative mt-6 mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="px-4 py-1.5 mb-4 rounded-full border border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/10 backdrop-blur-sm">
            <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-center text-brand-primary dark:text-brand-primary/80 font-bold">
              AI Workflows & Intelligent Systems
            </p>
          </div>

          <TextGenerateEffect
            words="Turn Operational Bottlenecks into Automated Revenue."
            className="text-center text-[32px] md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-brand-primary dark:text-brand-secondary"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg pt-2 text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">
            From intelligent product search to automated lead qualification, I architect custom AI workflows that eliminate friction. Accelerate your sales cycles and deliver instant, accurate responses to your customers around the clock.
          </p>

          <div className="flex gap-5 mt-2 md:mt-0 ">
            <a href="#contact">
              <MagicButton
                title="Book a Call"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#projects">
              <MagicButton
                title="View Live Demos"
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