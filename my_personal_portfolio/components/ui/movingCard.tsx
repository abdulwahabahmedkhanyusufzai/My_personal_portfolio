"use client";

import { cn } from "@/app/lib/utils/cn";
import { skillsData } from "@/data";
import React, { useEffect, useState } from "react";
import { ShineBorder } from "./ShineBorder";

export const InfiniteMovingCards = ({
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-8">
      {skillsData.map((category, index) => (
        <ScrollingSkillsSection
          key={category.category}
          category={category.category}
          skills={category.skills}
          direction={index % 2 === 0 ? "left" : "right"}
          pauseOnHover={pauseOnHover}
          className={className}
        />
      ))}
    </div>
  );
};

const ScrollingSkillsSection = ({
  category,
  skills,
  direction,
  pauseOnHover,
  className,
}: {
  category: string;
  skills: { name: string; level: string; icon?: JSX.Element }[];
  direction: "left" | "right";
  pauseOnHover: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      containerRef.current.style.setProperty("--animation-duration", "20s");

      setStart(true);
    }
  }

  return (
    <div>
      <h3 className="text-lg text-center  sm:text-xl md:text-2xl font-semibold text-gray-300 mb-2">
        {category}
      </h3>
      
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:max-w-5xl",
          className
        )}
      >
        
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {skills.map((skill) => (
            <ShineBorder className="relative rounded-2xl border">
            <li
              key={`${category}-${skill.name}`}
              className="w-[100px] sm:w-[200px] md:w-[220px] lg:w-[250px] max-w-full flex flex-col items-center text-center relative rounded-2xl border border-slate-700 px-4 py-4"
              style={{
                background:
                  "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              {skill.icon && (
                <div className="items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
                </div>
              )}
              <blockquote className="flex items-center">
                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {skill.name} - {skill.level}
                </span>
              </blockquote>
            </li>
            </ShineBorder>
          ))}
                  

        </ul>
        
      </div>
      
    </div>
  );
};
