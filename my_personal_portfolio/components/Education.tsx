import { education, appliedML } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";

const Education = () => {
    return (
        <div className="py-20" id="education">
            <div className="flex flex-col items-center gap-24">

                {/* Education Section */}
                <div className="w-full max-w-4xl flex flex-col items-center">
                    <GradualSpacing text="Education" />

                    <div className="w-full mt-10 flex justify-center">
                        {education.map((edu) => (
                            <MagicCard
                                key={edu.id}
                                className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800 p-8 md:p-10"
                                titleClassName="min-h-fit h-auto"
                            >
                                <div className="flex flex-col items-center text-center gap-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <h1 className="text-2xl md:text-4xl font-bold text-brand-primary dark:text-brand-secondary">
                                            {edu.institution}
                                        </h1>
                                        <p className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
                                            {edu.degree}
                                        </p>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className="text-sm font-medium px-4 py-1.5 bg-brand-primary/10 text-brand-primary dark:text-brand-secondary rounded-full border border-brand-primary/20 whitespace-nowrap">
                                                {edu.date}
                                            </span>
                                            <span className="text-sm text-neutral-500 font-medium">{edu.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-base font-bold text-blue">
                                        <span>Current Progress:</span>
                                        <span className="px-3 py-1 bg-blue/10 rounded-lg">{edu.grade}</span>
                                    </div>

                                    <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                                        {edu.desc}
                                    </p>

                                    {/* Coursework Badges */}
                                    {edu.coursework && (
                                        <div className="w-full mt-4">
                                            <p className="text-xs font-bold text-neutral-500 mb-4 uppercase tracking-[0.2em]">Core Technical Coursework</p>
                                            <div className="flex flex-wrap justify-center gap-3">
                                                {edu.coursework.map((course, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs md:text-sm px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-brand-primary/50 transition-colors"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </MagicCard>
                        ))}
                    </div>
                </div>

                {/* Applied Machine Learning Section */}
                <div className="w-full max-w-6xl flex flex-col items-center">
                    <GradualSpacing text="Applied Machine Learning" />

                    <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {appliedML.map((item) => (
                            <MagicCard
                                key={item.id}
                                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6"
                                titleClassName="min-h-fit h-auto"
                            >
                                <div className="flex flex-col h-full gap-4">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-bold text-brand-primary dark:text-brand-secondary leading-snug">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="text-xs font-bold text-brand-primary dark:text-blue-400 px-2 py-1 bg-brand-primary/10 dark:bg-blue-400/10 rounded border border-brand-primary/20 dark:border-blue-400/20">
                                                {item.rank}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 px-2 py-1 bg-neutral-100 dark:bg-white/10 rounded">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </MagicCard>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Education;
