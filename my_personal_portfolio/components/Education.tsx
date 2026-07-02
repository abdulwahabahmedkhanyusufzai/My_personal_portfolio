"use client";

import { education } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

const Education = () => {
    return (
        <div className="py-20" id="education">
            <div className="flex flex-col items-center gap-24">

                {/* Education Section */}
                <div className="w-full max-w-4xl flex flex-col items-center">
                    <GradualSpacing text="Education" />

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full mt-10 flex justify-center px-4"
                    >
                        {education.map((edu) => (
                            <motion.div key={edu.id} variants={cardVariants} whileHover={{ y: -4 }} className="w-full">
                                <MagicCard
                                    className="w-full text-black dark:text-white border-neutral-200 dark:border-slate-800/80 p-8 md:p-10 bg-white dark:bg-[#000319]/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
                                    titleClassName="min-h-fit h-auto"
                                >
                                    <div className="flex flex-col items-center text-center gap-6">
                                        <div className="flex flex-col items-center gap-2">
                                            <h1 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
                                                {edu.institution}
                                            </h1>
                                            <p className="text-lg md:text-xl font-semibold text-neutral-600 dark:text-neutral-300">
                                                {edu.degree}
                                            </p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="text-sm font-medium px-4 py-1.5 bg-brand-primary/10 text-brand-primary dark:text-brand-secondary rounded-full border border-brand-primary/20 whitespace-nowrap">
                                                    {edu.date}
                                                </span>
                                                <span className="text-sm text-neutral-500 font-medium">{edu.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-base font-bold text-brand-primary dark:text-brand-secondary">
                                            <span>Current Progress:</span>
                                            <span className="px-3 py-1 bg-brand-primary/10 rounded-lg">{edu.grade}</span>
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
                                                        <motion.span
                                                            key={idx}
                                                            whileHover={{ scale: 1.05 }}
                                                            className="text-xs md:text-sm px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-brand-primary/50 transition-colors cursor-default"
                                                        >
                                                            {course}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </MagicCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Education;

