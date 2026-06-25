import { workExperience } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <GradualSpacing text="Professional Experience" />

      <div className="max-w-5xl mx-auto mt-12 flex flex-col gap-8 px-4">
        {workExperience.map((card) => (
          <MagicCard
            key={card.id}
            className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6 md:p-8"
            titleClassName="min-h-fit h-auto"
          >
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              {card.thumbnail && (
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-neutral-200 dark:border-slate-800 bg-white p-1">
                  <Image
                    src={card.thumbnail}
                    alt={card.company}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
              )}
              
              <div className="flex-grow w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                  {/* Heading - Better Black Color */}
                  <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {card.title}
                  </h3>
                  <span className="text-xs md:text-sm font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-slate-900/60 px-3 py-1 rounded-full border border-neutral-200/50 dark:border-slate-800">
                    {card.date}
                  </span>
                </div>

                <div className="text-sm font-bold text-brand-primary dark:text-brand-secondary mb-4">
                  {card.company} &bull; <span className="font-semibold text-neutral-500">{card.location}</span>
                </div>

                <div className="flex flex-col gap-2">
                  {card.desc.map((d, i) => (
                    <p key={i} className="text-start text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex gap-2">
                      <span className="text-brand-primary mt-1 flex-shrink-0">&bull;</span>
                      <span>{d}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Experience;
