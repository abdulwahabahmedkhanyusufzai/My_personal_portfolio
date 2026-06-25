"use client";

import { GradualSpacing } from "./ui/GradualSpacing";
import { skillsData } from "@/data";
import Image from "next/image";
import { MagicCard } from "./ui/Card";

const MySkills = () => {
  return (
    <div className="py-20 w-full" id="skills">
      <GradualSpacing text="Technical Skills" />
      
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <MagicCard
              key={category.category + idx}
              className="p-6 border-neutral-200 dark:border-slate-800"
              titleClassName="h-auto"
            >
              {/* Card heading using better black color for light mode and clean white for dark mode */}
              <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-slate-800 pb-2">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={skill.name + sIdx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-slate-900/60 border border-neutral-200/60 dark:border-slate-800 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 hover:bg-neutral-100 dark:hover:bg-slate-900 transition-all duration-200"
                  >
                    {skill.icon ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/70 dark:bg-brand-secondary/70" />
                    )}
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
