import { workExperience, openSourceAchievements } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";

const Experience = () => {
    return (
        <div className="py-20" id="experience">
            <GradualSpacing text="Professional Experience" />

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <MagicCard
                        key={card.id}
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
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

            <div className="mt-20">
                <GradualSpacing text="Engineering Achievements" />
                <p className="text-center text-gray-500 dark:text-gray-400 mb-10">(Open Source)</p>

                <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {openSourceAchievements.map((item) => (
                        <MagicCard
                            key={item.id}
                            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex flex-col p-5 gap-2">
                                <h1 className="text-xl md:text-2xl font-bold">
                                    {item.project}
                                </h1>
                                <p className="text-sm font-semibold text-purple-500">
                                    {item.role}
                                </p>
                                <div className="flex flex-col gap-2 mt-2">
                                    {item.desc.map((d, i) => (
                                        <p key={i} className="text-sm text-gray-700 dark:text-gray-300">
                                            • {d}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
