"use client";

import { GradualSpacing } from "./ui/GradualSpacing";
import { skillsData } from "@/data";
import Image from "next/image";
import { MagicCard } from "./ui/Card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const MySkills = () => {
  return (
    <div className="py-20 w-full" id="skills">
      <GradualSpacing text="Technical Skills" />
      
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, idx) => (
            <motion.div key={category.category + idx} variants={cardVariants}>
              <MagicCard
                className="p-6 border-neutral-200 dark:border-slate-800/80 bg-white dark:bg-[#000319]/80 backdrop-blur-sm"
                titleClassName="h-auto"
              >
                {/* Card heading using better black color for light mode and clean white for dark mode */}
                <h3 className="text-lg font-extrabold mb-4 text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-slate-800 pb-2 tracking-tight">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name + sIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-slate-900/60 border border-neutral-200/60 dark:border-slate-800 hover:border-brand-primary/40 dark:hover:border-brand-primary/40 hover:bg-neutral-100 dark:hover:bg-slate-900 transition-all duration-200 shadow-sm cursor-default"
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
                    </motion.div>
                  ))}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MySkills;

