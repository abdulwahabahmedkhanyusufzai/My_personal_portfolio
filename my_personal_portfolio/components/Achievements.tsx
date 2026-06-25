"use client";

import { appliedML, competitiveProgramming } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";
import { FaTrophy, FaMedal } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
  Codeforces: SiCodeforces,
  AtCoder: FaTrophy, // Fallback to Trophy if SiAtcoder isn't installed
};

const Achievements = () => {
  return (
    <div className="py-20 w-full" id="achievements">
      {/* Main Section Header */}
      <GradualSpacing text="Achievements & Competitions" />

      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col gap-16">
        
        {/* Competitive Programming Subsection */}
        <div>
          <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 mb-6 border-l-4 border-brand-primary pl-3">
            Competitive Programming
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveProgramming.map((item) => {
              const Icon = platformIcons[item.platform] || FaTrophy;
              return (
                <MagicCard
                  key={item.id}
                  className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:scale-[1.02] transition-transform duration-300"
                  titleClassName="min-h-fit h-auto"
                >
                  <div className="flex flex-col p-5 gap-3 items-center text-center h-full justify-between">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-neutral-100 dark:bg-slate-900 rounded-full text-brand-primary dark:text-brand-secondary">
                        <Icon className="text-3xl" />
                      </div>
                      <h4 className="text-lg font-black text-neutral-900 dark:text-neutral-50">
                        {item.platform}
                      </h4>
                    </div>

                    <div className="w-full">
                      <div className="text-xs font-black uppercase px-2 py-1.5 rounded-lg bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-blue-400 border border-brand-primary/20 tracking-wider">
                        {item.rank}
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>

        {/* Applied ML Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 mb-6 border-l-4 border-brand-secondary pl-3">
            Applied ML & Kaggle Competitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appliedML.map((item) => {
              // Styling for medals
              const isSilver = item.rank.toLowerCase().includes("silver");
              const isBronze = item.rank.toLowerCase().includes("bronze");
              
              let badgeStyle = "bg-brand-primary/10 text-brand-primary border-brand-primary/20 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/60";
              let metalIcon = null;

              if (isSilver) {
                badgeStyle = "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border-slate-400 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200 dark:border-slate-700";
                metalIcon = <FaMedal className="text-slate-400 dark:text-slate-300" />;
              } else if (isBronze) {
                badgeStyle = "bg-gradient-to-r from-amber-700/20 to-amber-800/20 text-amber-800 border-amber-700/30 dark:from-amber-950/30 dark:to-amber-900/30 dark:text-amber-400 dark:border-amber-900/60";
                metalIcon = <FaMedal className="text-amber-600 dark:text-amber-500" />;
              }

              return (
                <MagicCard
                  key={item.id}
                  className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6 flex flex-col justify-between"
                  titleClassName="min-h-fit h-auto"
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2 border-b border-neutral-100 dark:border-slate-800/60 pb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-neutral-500 bg-neutral-100 dark:bg-slate-900 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Card Heading - Better Black Color */}
                      <h4 className="text-base font-black text-neutral-900 dark:text-neutral-50 leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border ${badgeStyle} w-fit`}>
                        {metalIcon}
                        <span>{item.rank}</span>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievements;
