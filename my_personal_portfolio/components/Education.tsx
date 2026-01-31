import { education, dataScienceCompetitions } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";

const Education = () => {
    return (
        <div className="py-20" id="education">
            <GradualSpacing text="Education" />

            <div className="w-full mt-10 grid grid-cols-1 gap-10 max-w-4xl mx-auto">
                {education.map((edu) => (
                    <MagicCard
                        key={edu.id}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center sm:flex-row flex-col">
                                <h1 className="text-xl md:text-2xl font-bold">{edu.institution}</h1>
                                <span className="text-sm text-gray-500">{edu.date}</span>
                            </div>
                            <p className="text-lg font-semibold text-blue">{edu.degree}</p>
                            <p className="text-sm text-gray-500">{edu.location}</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                                {edu.desc}
                            </p>
                        </div>
                    </MagicCard>
                ))}
            </div>

            <div className="mt-20">
                <GradualSpacing text="Data Science Competitions" />
                <div className="w-full mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {dataScienceCompetitions.map((comp) => (
                        <MagicCard
                            key={comp.id}
                            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="p-5 flex flex-col h-full justify-between">
                                <div>
                                    <h1 className="text-lg font-bold">
                                        {comp.title}
                                    </h1>
                                    <p className="text-sm font-semibold text-green-500 mt-1">
                                        {comp.rank}
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 line-clamp-4">
                                        {comp.desc}
                                    </p>
                                </div>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
