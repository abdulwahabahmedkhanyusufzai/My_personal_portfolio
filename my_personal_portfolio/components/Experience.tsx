import { workExperience, appliedML, competitiveProgramming } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";
import Image from "next/image";
import { FaTrophy, FaMicrochip } from "react-icons/fa6";


const Experience = () => {
    return (
        <div className="py-20" id="experience">
            <GradualSpacing text="Professional Experience" />

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <MagicCard
                        key={card.id}
                        className={`flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 ${card.className}`}
                        titleClassName="min-h-fit h-auto"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <div className="lg:ms-5">
                                <div className="flex items-center gap-3">
                                    {card.thumbnail && (
                                        <Image
                                            src={card.thumbnail}
                                            alt={card.company}
                                            width={32}
                                            height={32}
                                            className="rounded-full w-8 h-8 object-cover border border-gray-100 dark:border-slate-800"
                                        />
                                    )}
                                    <h1 className="text-start text-xl md:text-2xl font-bold">
                                        {card.title}
                                    </h1>
                                </div>
                                <p className="text-start text-gray-500 dark:text-gray-400 mt-1 font-semibold">
                                    {card.company} - {card.location}
                                </p>
                                <p className="text-start text-gray-400 dark:text-gray-500 text-sm mb-4">
                                    {card.date}
                                </p>
                                <div className="flex flex-col gap-2">
                                    {card.desc.map((d, i) => (
                                        <p key={i} className="text-start text-sm text-gray-700 dark:text-gray-300">
                                            • {d}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                ))}
            </div>

            {/* Applied ML Section */}
            <div className="mt-32">
                <GradualSpacing text="Applied Machine Learning" />
                <div className="w-full mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10">
                    {appliedML.map((item) => (
                        <MagicCard
                            key={item.id}
                            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            titleClassName="min-h-fit h-auto"
                        >
                            <div className="flex flex-col p-5 lg:p-8 gap-2 w-full">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-purple/10 rounded-lg">
                                        <FaMicrochip className="text-purple text-xl" />
                                    </div>
                                    <h1 className="text-xl font-bold leading-tight">
                                        {item.title}
                                    </h1>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-blue">
                                        {item.rank}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-black-100 dark:bg-white/10 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>

            {/* Competitive Programming Section */}
            <div className="mt-32">
                <GradualSpacing text="Competitive Programming" />
                <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    {competitiveProgramming.map((item) => (
                        <MagicCard
                            key={item.id}
                            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            titleClassName="min-h-fit h-auto"
                        >
                            <div className="flex flex-col p-6 gap-2 w-full items-center text-center">
                                <FaTrophy className="text-amber-400 text-3xl mb-2" />
                                <h1 className="text-xl font-bold">
                                    {item.platform}
                                </h1>
                                <p className="text-sm font-bold text-blue mb-2">
                                    {item.rank}
                                </p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
