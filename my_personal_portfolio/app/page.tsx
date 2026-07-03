"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaGraduationCap, FaLocationArrow, FaLocationDot, FaPlus, FaCheck, FaChevronRight
} from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SiLeetcode, SiCodechef, SiCodeforces, SiKaggle } from "react-icons/si";

import {
  skillsData, projects,
  workExperience, appliedML, competitiveProgramming, education,
  contactSchema
} from "@/data";
import { Navbar } from "@/components/ui/Navbar";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ThreeDCard";

type ContactType = z.infer<typeof contactSchema>;

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
    <CardContainer containerClassName="w-full py-0" className="w-full">
      <CardBody className="w-full relative group/card bg-neutral-50 dark:bg-[#161b22]/40 border-[#d0d7de] dark:border-white/[0.08] rounded-2xl p-5 border flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
        <CardItem translateZ="55" className="relative w-full h-[160px] rounded-xl overflow-hidden mb-4">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="300px"
            className="object-cover rounded-xl"
          />
        </CardItem>
        
        <div className="flex flex-col flex-grow">
          <CardItem translateZ="60" className="text-base font-black text-neutral-900 dark:text-neutral-50 mb-1.5 tracking-tight">
            {project.title}
          </CardItem>
          <CardItem translateZ="40" className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
            {project.des}
          </CardItem>
          
          {project.caseStudy && (
            <div className="mb-4 mt-auto pt-2 border-t border-neutral-200/50 dark:border-neutral-800">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-primary dark:text-brand-secondary hover:opacity-80"
              >
                <span>{isExpanded ? "Hide Details" : "View Case Study"}</span>
              </button>
              {isExpanded && (
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-2 bg-white dark:bg-black-100/40 p-3 rounded-lg border border-[#d0d7de] dark:border-[#30363d] flex flex-col gap-2">
                  <p><strong>Challenge:</strong> {project.caseStudy.challenge}</p>
                  <p><strong>Solution:</strong> {project.caseStudy.solution}</p>
                </div>
              )}
            </div>
          )}
          
          <CardItem translateZ="50" className="flex justify-between items-center gap-x-2 pt-3 border-t border-[#d0d7de]/50 dark:border-[#30363d]/50 mt-auto w-full">
            <div className="flex -space-x-1 overflow-hidden">
              {project.iconLists?.map((icon, idx) => (
                <div key={idx} className="border border-[#d0d7de] dark:border-[#30363d] rounded-full bg-white dark:bg-slate-950 w-6 h-6 flex justify-center items-center">
                  <Image src={icon} alt="tech" width={12} height={12} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-[11px] font-bold text-neutral-700 dark:text-neutral-300">
              {project.link && (
                <Link href={project.link} target="_blank" className="hover:text-brand-primary dark:hover:text-brand-secondary flex items-center gap-0.5">
                  Code <FaLocationArrow size={9} />
                </Link>
              )}
              {project.demoLink && (
                <Link href={project.demoLink} target="_blank" className="hover:text-brand-primary dark:hover:text-brand-secondary flex items-center gap-0.5">
                  Demo <FaLocationArrow size={9} />
                </Link>
              )}
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

interface ExperienceType {
  id: number;
  title: string;
  desc: string[];
  className: string;
  thumbnail: string;
  company: string;
  date: string;
  location: string;
}

function ExperienceCard({ card, index }: { card: ExperienceType; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex gap-4 items-start ${index !== 0 ? "border-t border-[#d0d7de]/50 dark:border-[#30363d]/50 pt-6" : ""}`}>
      <div className="relative size-12 sm:size-14 rounded-lg overflow-hidden bg-white border border-neutral-200/50 p-1 flex-shrink-0">
        <Image src={card.thumbnail} alt={card.company} fill className="object-contain" />
      </div>
      <div className="flex-grow">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex justify-between items-center text-left hover:opacity-85 focus:outline-none group cursor-pointer"
        >
          <div>
            <h3 className="text-sm sm:text-base font-black text-neutral-955 dark:text-neutral-50 tracking-tight group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">
              {card.title}
            </h3>
            <p className="text-[11px] sm:text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
              {card.company} &bull; Full-time
            </p>
          </div>
          <div className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-slate-800 transition-colors text-neutral-400 dark:text-neutral-500">
            <FaChevronRight className={`size-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
          </div>
        </button>
        <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
          {card.date} &bull; {card.location}
        </p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 flex flex-col gap-1.5 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium pb-2">
                {card.desc.map((bullet, idx) => (
                  <p key={idx} className="flex gap-2">
                    <span className="text-brand-primary">&bull;</span>
                    <span>{bullet}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface AwardType {
  id: number;
  title?: string;
  platform?: string;
  desc: string;
  rank: string;
  category?: string;
}

function AwardCard({ award }: { award: AwardType; index?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const titleText = award.title || award.platform || "";
  const isSilver = award.rank.toLowerCase().includes("silver");
  const isBronze = award.rank.toLowerCase().includes("bronze");
  
  let badgeColor = "bg-[#f6f8fa] dark:bg-[#21262d] text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-slate-800";
  if (isSilver) {
    badgeColor = "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700";
  } else if (isBronze) {
    badgeColor = "bg-amber-100/40 dark:bg-amber-950/10 text-amber-900 dark:text-amber-400 border-amber-200 dark:border-amber-900/40";
  } else if (award.platform) {
    badgeColor = "bg-brand-primary/10 border-brand-primary/20 text-brand-primary dark:bg-brand-secondary/15 dark:border-brand-secondary/30 dark:text-brand-secondary";
  }

  return (
    <div className="p-3 border border-neutral-200 dark:border-[#30363d] rounded-xl bg-neutral-50/50 dark:bg-slate-900/10 flex flex-col gap-1.5 transition-all">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center text-left hover:opacity-85 focus:outline-none group cursor-pointer"
      >
        <div>
          {award.category && (
            <span className="text-[9px] font-black uppercase tracking-wider bg-neutral-200 dark:bg-slate-800 px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-400">
              {award.category}
            </span>
          )}
          <h4 className="text-[11px] sm:text-xs font-black text-neutral-900 dark:text-neutral-100 leading-snug mt-1">{titleText}</h4>
        </div>
        <div className="text-neutral-400 dark:text-neutral-500">
          <FaChevronRight className={`size-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal mt-2">{award.desc}</p>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border inline-block mt-2 ${badgeColor}`}>
              {award.rank}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [skillsEndorsed, setSkillsEndorsed] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState("profile-header");
  const [showAllAbout, setShowAllAbout] = useState(false);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ["profile-header", "about", "experience", "projects", "awards", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 180; // Offset for sticky navbar
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = async () => {
    try {
      await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getValues()),
      });
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 5000);
      reset();
    } catch (error) {
      console.error("Error sending contact request:", error);
    }
  };

  const toggleEndorse = (skillName: string) => {
    setSkillsEndorsed(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-[#f3f2ef] dark:bg-[#0d1117] text-[#24292f] dark:text-[#c9d1d9] font-sans pb-16 transition-colors duration-300">
      {/* Background glowing beams */}
      <BackgroundBeams />

      {/* Floating glassmorphic Navbar */}
      <Navbar />

      {/* LinkedIn Profile Outer Container */}
      <div className="max-w-[1128px] mx-auto px-4 pt-24 flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Main Profile Sections */}
        <div className="w-full lg:w-3/4 flex flex-col gap-3">
          
          {/* Main LinkedIn Profile Card (Header & Intro) */}
          <div id="profile-header" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl overflow-hidden bg-white dark:bg-[#161b22] shadow-sm relative">
            
            {/* Banner Cover Photo */}
            <div className="h-32 sm:h-44 w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-brand-secondary relative overflow-hidden">
              {/* Abstract decorative grid & blobs */}
              <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/25 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Profile Avatar overlapping cover */}
            <div className="absolute top-16 sm:top-26 left-6 sm:left-8 z-10 size-32 sm:size-36 rounded-full border-4 border-white dark:border-[#161b22] overflow-hidden shadow-lg bg-slate-900 group">
              <Image
                src="/1777781647384.jpeg"
                alt="Abdul Wahab Ahmed Khan"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Profile Card Body Details */}
            <div className="pt-14 sm:pt-16 px-6 sm:px-8 pb-6 flex flex-col gap-3">
              
              {/* Profile Top Row: Name and Affiliations */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
                      Abdul Wahab Ahmed Khan
                    </h1>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                      Open to work
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-100 mt-1.5">
                    Applied AI Engineer | Backend &amp; Distributed Systems
                  </p>

                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 items-center font-medium">
                    <span>1.4+ Years of Professional Experience | AI Automation Engineer at Veltra AI Solutions</span>
                    <span>&bull;</span>
                    <span>Open source contributor at TensorFlow</span>
                  </p>
                </div>

                {/* Company & Education quick links */}
                <div className="flex flex-col gap-2.5 text-[11px] font-bold text-neutral-800 dark:text-neutral-200">
                  <div className="flex items-center gap-2">
                    <div className="relative size-6 rounded-md overflow-hidden bg-white border border-neutral-200/50 p-0.5 flex-shrink-0">
                      <Image src="/277720484.jpeg" alt="Veltra" fill className="object-contain" />
                    </div>
                    <span className="hover:underline cursor-pointer">Veltra AI Solution UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative size-6 rounded-full overflow-hidden bg-brand-primary/10 text-brand-primary flex items-center justify-center border border-brand-primary/10 flex-shrink-0">
                      <FaGraduationCap size={12} />
                    </div>
                    <span className="hover:underline cursor-pointer">Virtual University of Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Location & Connection Metadata */}
              <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 flex items-center flex-wrap gap-x-3 gap-y-1.5 font-medium border-t border-[#d0d7de]/40 dark:border-[#30363d]/40 pt-2.5 mt-1">
                <span className="flex items-center gap-1"><FaLocationDot /> Karachi, Pakistan</span>
                <span>&bull;</span>
                <a href="#contact" className="text-brand-primary dark:text-brand-secondary font-bold hover:underline">
                  Contact info
                </a>
                <span>&bull;</span>
                <a href="mailto:abdulwahabyusufzai72@gmail.com" className="text-neutral-600 dark:text-neutral-300 font-bold hover:underline">
                  abdulwahabyusufzai72@gmail.com
                </a>
                <span>&bull;</span>
                <span className="font-bold">+92-342-8320022</span>
              </div>

              {/* Competitive Programming & ML Stats Strip */}
              <div className="flex flex-wrap gap-2.5 mt-1 border-t border-[#d0d7de]/40 dark:border-[#30363d]/40 pt-2.5">
                <a
                  href="https://leetcode.com/u/abdulwahabahmedkhanyusufzai/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 transition-all cursor-pointer"
                >
                  <SiLeetcode size={11} />
                  LeetCode (Guardian 2235)
                </a>
                <a
                  href="https://www.codechef.com/users/abdulwahabusuf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded text-red-700 dark:text-red-400 hover:bg-red-500/20 transition-all cursor-pointer"
                >
                  <SiCodechef size={11} />
                  CodeChef (6-Star 2231)
                </a>
                <a
                  href="https://codeforces.com/profile/abdulwahab121"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-700 dark:text-blue-400 hover:bg-blue-500/20 transition-all cursor-pointer"
                >
                  <SiCodeforces size={11} />
                  Codeforces (1477)
                </a>
                <a
                  href="https://atcoder.jp/users/abdulwahab121"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500/20 transition-all cursor-pointer"
                >
                  <svg width={11} height={11} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5v-11l8 5.5-8 5.5z"/></svg>
                  AtCoder (Cyan)
                </a>
                <a
                  href="https://www.kaggle.com/abdulwahab2321"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-700 dark:text-purple-400 hover:bg-purple-500/20 transition-all cursor-pointer"
                >
                  <SiKaggle size={11} />
                  Kaggle Expert (Top 1,195)
                </a>
              </div>

              {/* Badges / CTA Action Row */}
              <div className="flex flex-wrap gap-2.5 mt-2">
                <a
                  href="#contact"
                  className="px-5 py-1.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold text-sm sm:text-base rounded-full shadow-sm transition-all hover:scale-105"
                >
                  Connect
                </a>
                <Link
                  href="/resume"
                  className="px-5 py-1.5 border-2 border-brand-primary hover:bg-brand-primary/5 text-brand-primary dark:border-brand-secondary dark:text-brand-secondary font-bold text-sm sm:text-base rounded-full transition-all hover:scale-105 flex items-center gap-1.5"
                >
                  <FaGithub /> View GitHub Resume
                </Link>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div id="about" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-5 sm:p-6 shadow-sm flex flex-col gap-3">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              About
            </h2>
            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
              <p>
                I’m <strong className="text-neutral-900 dark:text-neutral-100">Abdul Wahab Ahmed Khan</strong>, a Software Engineer dedicated to building high-performance backend systems and robust machine learning infrastructure. I specialize in distributed architectures, optimizing data-intensive pipelines, and fine-tuning large language models to solve complex real-world challenges.
                {!showAllAbout && (
                  <button
                    type="button"
                    onClick={() => setShowAllAbout(true)}
                    className="text-brand-primary dark:text-brand-secondary font-bold ml-1.5 hover:underline cursor-pointer focus:outline-none bg-transparent border-none p-0 inline"
                  >
                    ...see more
                  </button>
                )}
              </p>
              
              {showAllAbout && (
                <p className="mt-3 animate-fade-in">
                  With hands-on experience in orchestrating event-driven workflows with n8n and building microservice communication layers via gRPC/Kafka, I focus on turning complex technical bottlenecks into clean, scalable automations.
                  <button
                    type="button"
                    onClick={() => setShowAllAbout(false)}
                    className="text-brand-primary dark:text-brand-secondary font-bold ml-1.5 hover:underline cursor-pointer focus:outline-none bg-transparent border-none p-0 inline"
                  >
                    see less
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Professional Experience
            </h2>
            <div className="flex flex-col gap-6">
              {workExperience.map((card, index) => (
                <ExperienceCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>

          {/* Open Source Contributions Section */}
          <div id="open-source" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-5 sm:p-6 shadow-sm flex flex-col gap-4">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Open Source Contributions
            </h2>
            <div className="flex gap-4 items-start">
              <div className="relative size-12 sm:size-14 rounded-lg overflow-hidden bg-white border border-neutral-200/50 p-1.5 flex-shrink-0">
                <Image src="/tensorflow.svg" alt="TensorFlow" fill className="object-contain" />
              </div>
              <div className="flex-grow">
                <h3 className="text-sm sm:text-base font-black text-neutral-955 dark:text-neutral-50 tracking-tight">
                  TensorFlow (Google)
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                  Core C++ Contributor &bull; Remote
                </p>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                  Feb 2026 - Present
                </p>
                
                <div className="mt-3 flex flex-col gap-2 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  <p className="flex gap-2">
                    <span className="text-brand-primary">&bull;</span>
                    <span>Contributed a core C++ framework bug fix for <strong className="text-neutral-900 dark:text-neutral-100">TensorShape</strong>, resolving zero-dimensional <strong className="text-neutral-900 dark:text-neutral-100">int64</strong> overflow and order-dependent edge cases in element-count computation.</span>
                  </p>
                  <p className="flex gap-2">
                    <span className="text-brand-primary">&bull;</span>
                    <span>Collaborated with TensorFlow maintainers through multiple review iterations, implementing requested framework changes and comprehensive regression tests for <strong className="text-neutral-900 dark:text-neutral-100">TensorShape</strong> and <strong className="text-neutral-900 dark:text-neutral-100">PartialTensorShape</strong>.</span>
                  </p>
                  <p className="flex gap-2">
                    <span className="text-brand-primary">&bull;</span>
                    <span>
                      <strong className="text-neutral-900 dark:text-neutral-100">PR #109131:</strong> Merged by TensorFlow maintainers and validated through TensorFlow CI and Google&apos;s internal <strong className="text-neutral-900 dark:text-neutral-100">Copybara</strong> verification pipeline.{" "}
                      <a
                        href="https://github.com/tensorflow/tensorflow/pull/109131"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-primary dark:text-brand-secondary font-bold hover:underline"
                      >
                        GitHub Link
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects / Repositories Section */}
          <div id="projects" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Honors & Awards (Competitive & ML Achievements) */}
          <div id="awards" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Honors & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Applied ML Medals */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-black uppercase text-neutral-400 tracking-wider">Applied Machine Learning</h3>
                <div className="flex flex-col gap-3">
                  {appliedML.map((item, index) => (
                    <AwardCard key={item.id} award={item} index={index} />
                  ))}
                </div>
              </div>

              {/* Competitive Programming */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-black uppercase text-neutral-400 tracking-wider">Competitive Programming</h3>
                <div className="flex flex-col gap-3">
                  {competitiveProgramming.map((item, index) => (
                    <AwardCard key={item.id} award={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillsData.map((category, idx) => (
                <div key={idx} className="p-4 border border-neutral-200 dark:border-[#30363d] rounded-2xl bg-[#f6f8fa]/50 dark:bg-slate-900/10">
                  <h3 className="text-sm font-black text-neutral-900 dark:text-neutral-50 mb-3 border-b border-[#d0d7de]/50 dark:border-[#30363d]/50 pb-1.5 tracking-tight">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const isEndorsed = skillsEndorsed[skill.name];
                      return (
                        <button
                          key={sIdx}
                          onClick={() => toggleEndorse(skill.name)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                            isEndorsed
                              ? "bg-brand-primary/15 border-brand-primary text-brand-primary dark:bg-brand-secondary/15 dark:border-brand-secondary dark:text-brand-secondary"
                              : "bg-white dark:bg-[#161b22] border-[#d0d7de] dark:border-[#30363d] text-neutral-700 dark:text-neutral-300 hover:bg-[#f6f8fa] dark:hover:bg-[#21262d]"
                          }`}
                        >
                          {skill.icon ? (
                            <Image src={skill.icon} alt={skill.name} width={14} height={14} className="object-contain" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          )}
                          <span>{skill.name}</span>
                          <span className="w-[1px] h-3 bg-neutral-300 dark:bg-slate-700 mx-1" />
                          {isEndorsed ? <FaCheck className="text-[10px]" /> : <FaPlus className="text-[10px] text-neutral-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div id="education" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-6 sm:p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
              Education
            </h2>
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <div key={edu.id} className="flex gap-4 items-start">
                  <div className="relative size-12 sm:size-14 rounded-full overflow-hidden bg-brand-primary/10 text-brand-primary flex items-center justify-center border border-brand-primary/20 p-2 flex-shrink-0">
                    <FaGraduationCap size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base font-black text-neutral-955 dark:text-neutral-50 tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-semibold text-neutral-700 dark:text-neutral-300 mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                      {edu.date} &bull; {edu.location}
                    </p>
                    <div className="mt-2 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                      <p>{edu.desc}</p>
                      <div className="mt-3">
                        <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider mb-2">Core Technical Coursework</p>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, idx) => (
                            <span key={idx} className="text-[9px] font-semibold px-2 py-0.5 bg-[#f6f8fa] dark:bg-[#21262d] border border-neutral-200 dark:border-slate-800 rounded">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact (Send Note / Connect Form) */}
          <div id="contact" className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-5 sm:p-6 shadow-sm flex flex-col gap-5">
            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
                Connect & Message
              </h2>
              <p className="text-[11px] sm:text-xs text-neutral-500 mt-1.5">
                Send a direct note to initiate a professional conversation or schedule a sync.
              </p>
            </div>

            {messageSent && (
              <div className="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl text-sm font-bold animate-fade-in">
                ✓ Thank you! Your message has been sent successfully. I will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit(handleContact)} className="space-y-4">
              <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
                <div className="flex-1 w-full">
                  <label htmlFor="firstName" className="block text-[10px] font-bold text-[#57606a] dark:text-[#8b949e] uppercase mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Ex. Abdul"
                    {...register("firstName")}
                    className="block w-full px-3 py-2 rounded-lg bg-[#f6f8fa] dark:bg-[#1f242c] border border-[#d0d7de] dark:border-[#30363d] text-neutral-900 dark:text-neutral-50 shadow-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary text-xs"
                  />
                  {errors?.firstName && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors?.firstName?.message}</p>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <label htmlFor="lastName" className="block text-[10px] font-bold text-[#57606a] dark:text-[#8b949e] uppercase mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Ex. Khan"
                    {...register("lastName")}
                    className="block w-full px-3 py-2 rounded-lg bg-[#f6f8fa] dark:bg-[#1f242c] border border-[#d0d7de] dark:border-[#30363d] text-neutral-900 dark:text-neutral-50 shadow-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary text-xs"
                  />
                  {errors?.lastName && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors?.lastName?.message}</p>
                  )}
                </div>
              </div>

              <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
                <div className="flex-1 w-full">
                  <label htmlFor="email" className="block text-[10px] font-bold text-[#57606a] dark:text-[#8b949e] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ex. absurw@example.com"
                    {...register("email")}
                    className="block w-full px-3 py-2 rounded-lg bg-[#f6f8fa] dark:bg-[#1f242c] border border-[#d0d7de] dark:border-[#30363d] text-neutral-900 dark:text-neutral-50 shadow-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary text-xs"
                  />
                  {errors?.email && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors?.email?.message}</p>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <label htmlFor="phoneNumber" className="block text-[10px] font-bold text-[#57606a] dark:text-[#8b949e] uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Ex. +923428320022"
                    {...register("phoneNumber")}
                    className="block w-full px-3 py-2 rounded-lg bg-[#f6f8fa] dark:bg-[#1f242c] border border-[#d0d7de] dark:border-[#30363d] text-neutral-900 dark:text-neutral-50 shadow-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary text-xs"
                  />
                  {errors?.phoneNumber && (
                    <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors?.phoneNumber?.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-bold text-[#57606a] dark:text-[#8b949e] uppercase mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Connection topic"
                  {...register("subject")}
                  className="block w-full px-3 py-2 rounded-lg bg-[#f6f8fa] dark:bg-[#1f242c] border border-[#d0d7de] dark:border-[#30363d] text-neutral-900 dark:text-neutral-50 shadow-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary text-xs"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-[#57606a] dark:text-[#8b949e] uppercase mb-1">
                  Add Note
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Introduce yourself or leave a message..."
                  {...register("message")}
                  className="block w-full px-3 py-2 rounded-lg bg-[#f6f8fa] dark:bg-[#1f242c] border border-[#d0d7de] dark:border-[#30363d] text-neutral-900 dark:text-neutral-50 shadow-sm focus:outline-none focus:border-brand-primary dark:focus:border-brand-secondary text-xs"
                />
                {errors?.message && (
                  <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors?.message?.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a66c2] hover:bg-[#004182] text-white font-bold py-2 rounded-full transition-all text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                {isSubmitting ? "Sending Connection..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>

        {/* Right Column: Profile Widgets & Stats */}
        <div className="w-full lg:w-1/4 flex flex-col gap-3 lg:sticky lg:top-24 self-start">
          
          {/* Profile Navigation Sticky TOC Widget */}
          <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-4 shadow-sm">
            <h3 className="font-bold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
              Profile Navigation
            </h3>
            <div className="flex flex-col gap-1 text-sm font-semibold font-sans">
              {[
                { id: "profile-header", label: "Profile" },
                { id: "about", label: "About" },
                { id: "experience", label: "Professional Experience" },
                { id: "projects", label: "Featured Projects" },
                { id: "awards", label: "Honors & Awards" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Connect" }
              ].map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(sec.id);
                    if (el) {
                      window.scrollTo({
                        top: el.offsetTop - 140,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all text-xs uppercase tracking-wider ${
                    activeSection === sec.id
                      ? "bg-brand-primary/10 text-brand-primary dark:bg-brand-secondary/15 dark:text-brand-secondary font-extrabold border-l-4 border-brand-primary dark:border-brand-secondary pl-2"
                      : "text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* GitHub Style Contribution activity grid block */}
          <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl p-4 bg-white dark:bg-[#161b22] shadow-sm flex flex-col gap-3">
            <h3 className="font-bold text-xs text-neutral-800 dark:text-[#e6edf3]">
              Contribution Activity
            </h3>
            <div className="flex flex-wrap gap-0.5 justify-center">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const level = Math.floor(Math.random() * 5);
                    const darkColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                    const lightColors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
                    return (
                      <div
                        key={j}
                        className="w-2.5 h-2.5 rounded-sm"
                        style={{ backgroundColor: lightColors[level] }}
                        data-dark-color={darkColors[level]}
                        ref={(el) => {
                          if (el && mounted && document.documentElement.classList.contains('dark')) {
                            el.style.backgroundColor = darkColors[level];
                          }
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-[10px] text-neutral-400 mt-1">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#ebedf0] dark:bg-[#161b22] rounded-sm" />
                <div className="w-2 h-2 bg-[#9be9a8] dark:bg-[#0e4429] rounded-sm" />
                <div className="w-2 h-2 bg-[#40c463] dark:bg-[#006d32] rounded-sm" />
                <div className="w-2 h-2 bg-[#30a14e] dark:bg-[#26a641] rounded-sm" />
                <div className="w-2 h-2 bg-[#216e39] dark:bg-[#39d353] rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* People also viewed */}
          <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-2xl bg-white dark:bg-[#161b22] p-4 shadow-sm flex flex-col gap-4">
            <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-50 tracking-tight">
              People also viewed
            </h3>
            
            <div className="flex flex-col gap-4 text-xs font-semibold">
              <div className="flex gap-2">
                <div className="relative size-9 rounded-full overflow-hidden bg-purple-500/10 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <span>AI</span>
                </div>
                <div>
                  <h4 className="hover:underline cursor-pointer text-neutral-900 dark:text-neutral-100">Veltra AI Agent</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Enterprise Automation Service</p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="relative size-9 rounded-full overflow-hidden bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <span>FS</span>
                </div>
                <div>
                  <h4 className="hover:underline cursor-pointer text-neutral-900 dark:text-neutral-100">FastAPI Agentic CRM</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Scientific Microservice API</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-[1128px] mx-auto px-4 mt-8 pt-8 border-t border-[#d0d7de] dark:border-[#30363d] text-xs text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
          <Link href="/" className="hover:text-brand-primary dark:hover:text-brand-secondary">© 2026 Abdul Wahab Ahmed Khan</Link>
          <Link href="#" className="hover:underline">User Agreement</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Cookie Policy</Link>
          <Link href="#" className="hover:underline">Copyright Policy</Link>
        </div>
        <FaGithub size={18} className="opacity-20 hidden sm:block" />
        <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
          <Link href="#" className="hover:underline">Customer Support</Link>
          <Link href="#" className="hover:underline">Manage Account</Link>
          <Link href="#" className="hover:underline">Blog</Link>
          <Link href="#" className="hover:underline">About LinkedIn</Link>
        </div>
      </footer>
    </main>
  );
}
