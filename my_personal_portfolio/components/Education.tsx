import { education, dataScienceCompetitions } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";

const Education = () => {
    return (
        <div className="py-20" id="education">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Left Column: Education */}
                <div className="w-full lg:w-1/2">
                    <GradualSpacing text="Education" />

                    <div className="w-full mt-10 grid grid-cols-1 gap-10">
                        {education.map((edu) => (
                            <MagicCard
                                key={edu.id}
                                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6"
                                titleClassName="min-h-fit h-auto"
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between items-start sm:flex-row flex-col gap-2">
                                        <div>
                                            <h1 className="text-xl md:text-2xl font-bold">{edu.institution}</h1>
                                            <p className="text-lg font-semibold text-blue mt-1">{edu.degree}</p>
                                        </div>
                                        <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-slate-900 rounded-full border border-gray-200 dark:border-slate-800 whitespace-nowrap">
                                            {edu.date}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>{edu.location}</span>
                                        {/* @ts-ignore */}
                                        {edu.grade && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                                                {/* @ts-ignore */}
                                                <span className="font-medium text-black dark:text-gray-300">{edu.grade}</span>
                                            </>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {edu.desc}
                                    </p>

                                    {/* Coursework Badges */}
                                    {/* @ts-ignore */}
                                    {edu.coursework && (
                                        <div className="mt-2">
                                            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Relevant Coursework</p>
                                            <div className="flex flex-wrap gap-2">
                                                {/* @ts-ignore */}
                                                {edu.coursework.map((course, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50"
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

                {/* Right Column: Data Science Competitions */}
                <div className="w-full lg:w-1/2">
                    <GradualSpacing text="Data Science Competitions" />

                    <div className="relative border-l border-gray-200 dark:border-slate-800 ml-3 md:ml-6 mt-10 space-y-8">
                        {dataScienceCompetitions.map((comp) => (
                            <div key={comp.id} className="relative pl-8 md:pl-12">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#000319]" />

                                {/* Card Content */}
                                <div className="flex flex-col gap-2 relative">
                                    <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-x-4">
                                        <h3 className="text-lg font-bold text-black dark:text-white leading-snug">
                                            {comp.title}
                                        </h3>
                                        <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded w-fit mt-1 sm:mt-0">
                                            {comp.rank}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {comp.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Education;
