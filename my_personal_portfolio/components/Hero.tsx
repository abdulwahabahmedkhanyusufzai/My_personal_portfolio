import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-700 dark:text-blue-100 max-w-80">
            Crafting High-Performance Web & AI Solutions
          </p>

          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold my-4 dark:text-white text-black leading-snug tracking-wide">
            Building Scalable Digital Experiences with Modern Tech
          </h1>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl pt-4 text-black dark:text-white-100 font-light">
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