"use client";

import { projects } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import MagicButton from "./ui/MagicButton";

interface CaseStudyType {
  challenge: string;
  solution: string;
  results: string[];
}

interface ProjectType {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  demoLink?: string;
  caseStudy?: CaseStudyType;
}

function ProjectCard({ project }: { project: ProjectType }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <MagicCard className="w-full h-full" titleClassName="min-h-fit h-auto">
      <div className="flex flex-col w-full h-full hover:shadow-xl transition-shadow duration-500">
        
        {/* Fixed image height */}
        <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="rounded w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Project Details */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Card Heading - Better Black Color in Light Mode, Crisp White in Dark Mode */}
          <h2 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-neutral-50 mb-3 tracking-tight">
            {project.title}
          </h2>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            {project.des}
          </p>

          {/* Collapsible Case Study Section */}
          {project.caseStudy && (
            <div className="mb-5 border-t border-neutral-100 dark:border-slate-800/80 pt-4 mt-auto">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-brand-secondary hover:opacity-80 transition-opacity"
              >
                <span>{isExpanded ? "Hide Case Study" : "View Case Study"}</span>
                {isExpanded ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-slate-900/40 border border-neutral-200/50 dark:border-slate-800/60">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-1">
                      Engineering Solution
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-1.5">
                      Key Outcomes & Metrics
                    </h4>
                    <ul className="list-disc pl-4 flex flex-col gap-1">
                      {project.caseStudy.results.map((result, idx) => (
                        <li key={idx} className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Icons and Links */}
          <div className="flex justify-between items-center gap-x-3 mt-auto pt-4 border-t border-neutral-100 dark:border-slate-800/80">
            <div className="flex -space-x-1.5 overflow-hidden">
              {project.iconLists?.map((icon, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 dark:border-slate-800 rounded-full bg-white dark:bg-slate-950 w-8 h-8 flex justify-center items-center shadow-sm"
                  style={{ transform: `translateX(-${4 * index}px)` }}
                >
                  <Image src={icon} alt="tech icon" width={18} height={18} className="object-contain" />
                </div>
              ))}
            </div>

            {/* Conditionally render Links only if they exist */}
            <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-neutral-700 dark:text-neutral-300">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                >
                  GitHub <FaLocationArrow size={12} />
                </Link>
              )}
              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                >
                  Demo <FaLocationArrow size={12} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container my-10">
        <GradualSpacing text="Recent Projects" className="pt-14" />

        {/* Ensure projects exist before rendering */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-400 mt-5">
            No projects available at the moment.
          </p>
        )}

        {/* View All Projects Button */}
        <div className="flex items-center justify-center mt-12">
          <Link href="https://github.com/abdulwahabahmedkhanyusufzai" target="_blank">
            <MagicButton title="View All Projects" icon={<FaLocationArrow />} position="right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
