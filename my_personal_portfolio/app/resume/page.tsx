"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub, FaBookOpen, FaCode, FaStar, FaCodeFork, FaEye,
  FaLocationDot, FaLink, FaEnvelope,
  FaFileLines, FaFolder, FaCircle, FaBriefcase, FaGraduationCap
} from "react-icons/fa6";
import { GoRepo, GoIssueOpened, GoGitPullRequest, GoPlay, GoProject, GoGraph } from "react-icons/go";
import { workExperience, education, skillsData } from "@/data";
import { cn } from "@/app/lib/utils/cn";

import { Navbar } from "@/components/ui/Navbar";

const GithubResume = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const experienceCommit = workExperience[0];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-[#24292f] dark:text-[#c9d1d9] font-sans transition-colors duration-300">
      <Navbar />

      {/* Repo Header */}
      <div className="bg-[#f6f8fa] dark:bg-[#0d1117] border-b border-[#d0d7de] dark:border-[#30363d] pt-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xl">
              <GoRepo className="text-[#57606a] dark:text-[#8b949e]" />
              <Link href="#" className="text-[#0969da] dark:text-[#58a6ff] hover:underline font-semibold">abdulwahab</Link>
              <span className="text-[#57606a] dark:text-[#8b949e]">/</span>
              <Link href="#" className="text-[#0969da] dark:text-[#58a6ff] hover:underline font-semibold">resume</Link>
              <span className="text-xs border border-[#d0d7de] dark:border-[#30363d] px-2 py-0.5 rounded-full text-[#57606a] dark:text-[#8b949e] font-medium">Public</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-xs font-medium shadow-sm">
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-[#f3f4f6] dark:hover:bg-[#30363d] border-r border-[#d0d7de] dark:border-[#30363d]">
                  <FaEye /> Watch <span className="bg-[#afb8c133] dark:bg-[#30363d] px-1.5 rounded-full">1</span>
                </button>
              </div>
              <div className="flex bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-xs font-medium shadow-sm">
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-[#f3f4f6] dark:hover:bg-[#30363d] border-r border-[#d0d7de] dark:border-[#30363d]">
                  <FaCodeFork /> Fork <span className="bg-[#afb8c133] dark:bg-[#30363d] px-1.5 rounded-full">0</span>
                </button>
              </div>
              <div className="flex bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-xs font-medium shadow-sm">
                <button className="flex items-center gap-1 px-3 py-1.5 hover:bg-[#f3f4f6] dark:hover:bg-[#30363d] border-r border-[#d0d7de] dark:border-[#30363d]">
                  <FaStar className="text-[#e3b341]" /> Star <span className="bg-[#afb8c133] dark:bg-[#30363d] px-1.5 rounded-full">12</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <TabItem icon={<GoCode />} label="Code" active />
            <TabItem icon={<GoIssueOpened />} label="Issues" />
            <TabItem icon={<GoGitPullRequest />} label="Pull requests" />
            <TabItem icon={<GoPlay />} label="Actions" />
            <TabItem icon={<GoProject />} label="Projects" />
            <TabItem icon={<GoGraph />} label="Insights" />
          </nav>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 md:px-8 py-6 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <div className="relative w-full aspect-square rounded-full overflow-hidden border border-[#d0d7de] dark:border-[#30363d]">
            <Image
              src="/my_picture.jpg"
              alt="Abdul Wahab"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-bold text-[#24292f] dark:text-[#e6edf3]">Abdul Wahab Ahmed Khan</h1>
            <p className="text-xl text-[#57606a] dark:text-[#8b949e] font-light italic">MERN Stack Developer & AI Enthusiast</p>
          </div>
          <button className="w-full py-1.5 bg-[#f6f8fa] dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] rounded-md text-sm font-semibold hover:bg-[#f3f4f6] dark:hover:bg-[#30363d] transition-colors mt-2">
            Follow
          </button>
          <p className="text-sm mt-2">
            Passionate software engineer building high-performance web applications and contributing to the future of AI.
          </p>

          <div className="flex flex-col gap-2 mt-2 text-sm text-[#57606a] dark:text-[#8b949e]">
            <div className="flex items-center gap-2">
              <FaLocationDot /> Karachi, Pakistan
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:absurw@gmail.com" className="hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:underline">absurw@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLink /> <a href="https://abdulwahab.dev" className="hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:underline">abdulwahab.dev</a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub /> <a href="https://github.com/abdulwahabahmedkhanyusufzai" className="hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:underline">@abdulwahab</a>
            </div>
          </div>

          <div className="border-t border-[#d0d7de] dark:border-[#30363d] pt-4 mt-2">
            <h3 className="font-semibold text-[#24292f] dark:text-[#e6edf3]">Achievements</h3>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 rounded-full border border-[#d0d7de] dark:border-[#30363d] flex items-center justify-center bg-[#f6f8fa] dark:bg-[#161b22]" title="Pull Shark">
                🦈
              </div>
              <div className="w-8 h-8 rounded-full border border-[#d0d7de] dark:border-[#30363d] flex items-center justify-center bg-[#f6f8fa] dark:bg-[#161b22]" title="Arctic Code Vault Contributor">
                ❄️
              </div>
              <div className="w-8 h-8 rounded-full border border-[#d0d7de] dark:border-[#30363d] flex items-center justify-center bg-[#f6f8fa] dark:bg-[#161b22]" title="YOLO">
                🏃
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {/* File Explorer */}
          <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-md overflow-hidden bg-white dark:bg-[#0d1117]">
            {/* Commit bar */}
            <div className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] p-3 flex items-center justify-between">
              <div className="flex items-center gap-3 truncate">
                <Image src="/my_picture.jpg" alt="user" width={24} height={24} className="rounded-full" />
                <span className="font-semibold text-sm text-[#24292f] dark:text-[#e6edf3] hover:text-[#0969da] dark:hover:text-[#58a6ff] cursor-pointer">abdulwahab</span>
                <span className="text-sm text-[#57606a] dark:text-[#8b949e] truncate hover:text-[#0969da] dark:hover:text-[#58a6ff] cursor-pointer">{experienceCommit.desc[0].slice(0, 60)}...</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap ml-4">
                <span className="text-xs text-[#57606a] dark:text-[#8b949e]">latest commit 804f5e2</span>
                <span className="text-xs text-[#57606a] dark:text-[#8b949e] ml-2">2 weeks ago</span>
              </div>
            </div>

            {/* File List */}
            <div className="flex flex-col">
              <FileRow
                name="app"
                icon={<FaFolder className="text-[#54aeff] dark:text-[#8b949e]" />}
                commit="Initialize core architecture"
                date="2 months ago"
              />
              <FileRow
                name="experience"
                icon={<FaFolder className="text-[#54aeff] dark:text-[#8b949e]" />}
                commit={`Add ${experienceCommit.company} experience`}
                date="2 weeks ago"
              />
              <FileRow
                name="education"
                icon={<FaFolder className="text-[#54aeff] dark:text-[#8b949e]" />}
                commit="Update academic records"
                date="1 month ago"
              />
              <FileRow
                name="skills"
                icon={<FaFolder className="text-[#54aeff] dark:text-[#8b949e]" />}
                commit="Add AI/ML and Cloud stack"
                date="3 days ago"
              />
              <FileRow
                name="README.md"
                icon={<FaFileLines className="text-[#57606a] dark:text-[#8b949e]" />}
                commit="Update professional summary"
                date="yesterday"
                active
              />
              <FileRow
                name="package.json"
                icon={<FaFileLines className="text-[#57606a] dark:text-[#8b949e]" />}
                commit="Bump version to 2026.4.16"
                date="today"
              />
            </div>
          </div>

          {/* README View */}
          <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-md bg-white dark:bg-[#0d1117]">
            <div className="bg-[#f6f8fa] dark:bg-[#161b22] border-b border-[#d0d7de] dark:border-[#30363d] p-3 flex items-center gap-2 sticky top-0 z-10">
              <FaBookOpen className="text-[#57606a] dark:text-[#8b949e]" size={14} />
              <span className="font-semibold text-sm">README.md</span>
            </div>

            <div className="p-10 prose dark:prose-invert max-w-none text-[#24292f] dark:text-[#c9d1d9]">
              <h1 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-2 text-3xl font-bold mb-4 text-[#24292f] dark:text-[#e6edf3]">
                Abdul Wahab Ahmed Khan
              </h1>

              <div className="flex gap-2 mb-8">
                <Image src="https://img.shields.io/badge/MERN-Developer-blue?style=flat-square" alt="mern" width={110} height={20} unoptimized />
                <Image src="https://img.shields.io/badge/Open--Source-Contributor-brightgreen?style=flat-square" alt="os" width={140} height={20} unoptimized />
                <Image src="https://img.shields.io/badge/AI-Enthusiast-purple?style=flat-square" alt="ai" width={100} height={20} unoptimized />
              </div>

              <h2 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-1 text-2xl font-semibold mb-4 mt-8 flex items-center gap-2 text-[#24292f] dark:text-[#e6edf3]">
                <FaBriefcase size={20} className="text-[#57606a] dark:text-[#8b949e]" /> Work Experience
              </h2>
              {workExperience.map((exp) => (
                <div key={exp.id} className="mb-6">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-[#0969da] dark:text-[#58a6ff]">{exp.title} @ {exp.company}</h3>
                    <span className="text-sm text-[#57606a] dark:text-[#8b949e]">{exp.date}</span>
                  </div>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#57606a] dark:text-[#8b949e]">
                    {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              ))}

              <h2 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-1 text-2xl font-semibold mb-4 mt-8 flex items-center gap-2 text-[#24292f] dark:text-[#e6edf3]">
                <FaCode size={20} className="text-[#57606a] dark:text-[#8b949e]" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((category) => (
                  <div key={category.category} className="border border-[#d0d7de] dark:border-[#30363d] rounded-lg p-4 bg-[#f6f8fa] dark:bg-[#161b22]">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <FaCircle size={8} className="text-[#0969da] dark:text-[#58a6ff]" /> {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(s => (
                        <span key={s.name} className="bg-white dark:bg-[#21262d] border border-[#d0d7de] dark:border-[#30363d] px-2 py-0.5 rounded text-xs">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="border-b border-[#d0d7de] dark:border-[#30363d] pb-1 text-2xl font-semibold mb-4 mt-8 flex items-center gap-2 text-[#24292f] dark:text-[#e6edf3]">
                <FaGraduationCap size={20} className="text-[#57606a] dark:text-[#8b949e]" /> Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="text-xl font-bold text-[#24292f] dark:text-[#e6edf3]">{edu.institution}</h3>
                  <p className="text-[#57606a] dark:text-[#8b949e]">{edu.degree} — {edu.date}</p>
                  <p className="text-sm italic text-[#57606a] dark:text-[#8b949e] mt-1">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border border-[#d0d7de] dark:border-[#30363d] rounded-md p-6 bg-white dark:bg-[#0d1117]">
            <h3 className="font-semibold mb-4">Contribution Activity</h3>
            <div className="flex flex-wrap gap-1">
              {Array.from({ length: 52 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, j) => {
                    const level = Math.floor(Math.random() * 5);
                    const darkColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
                    const lightColors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
                    return (
                      <div
                        key={j}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: mounted && document.documentElement.classList.contains('dark') ? darkColors[level] : lightColors[level] }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-[#57606a] dark:text-[#8b949e]">
              <span>Learn how we count contributions</span>
              <div className="flex items-center gap-1">
                Less <div className="w-3 h-3 rounded-sm bg-[#ebedf0] dark:bg-[#161b22]" />
                <div className="w-3 h-3 rounded-sm bg-[#9be9a8] dark:bg-[#0e4429]" />
                <div className="w-3 h-3 rounded-sm bg-[#40c463] dark:bg-[#006d32]" />
                <div className="w-3 h-3 rounded-sm bg-[#30a14e] dark:bg-[#26a641]" />
                <div className="w-3 h-3 rounded-sm bg-[#216e39] dark:bg-[#39d353]" /> More
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1280px] mx-auto px-4 md:px-8 py-10 border-t border-[#d0d7de] dark:border-[#30363d] mt-10 text-xs text-[#57606a] dark:text-[#8b949e] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="/" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">© 2026 Abdul Wahab</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Terms</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Privacy</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Security</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Status</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Docs</Link>
        </div>
        <FaGithub size={24} className="opacity-20 hidden md:block" />
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Contact GitHub</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Pricing</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">API</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Training</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">Blog</Link>
          <Link href="#" className="hover:text-[#0969da] dark:hover:text-[#58a6ff]">About</Link>
        </div>
      </footer>
    </div>
  );
};

const TabItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={cn(
    "flex items-center gap-2 px-4 py-3 border-b-2 text-sm transition-colors whitespace-nowrap",
    active ? "border-[#f78166] text-[#24292f] dark:text-[#e6edf3]" : "border-transparent text-[#57606a] dark:text-[#8b949e] hover:border-[#8b949e] dark:hover:border-[#8b949e]"
  )}>
    {icon} {label}
  </button>
);

const FileRow = ({ name, icon, commit, date, active = false }: { name: string, icon: React.ReactNode, commit: string, date: string, active?: boolean }) => (
  <div className="grid grid-cols-12 px-4 py-2 border-t border-[#d0d7de] dark:border-[#30363d] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] text-sm group">
    <div className="col-span-12 md:col-span-3 flex items-center gap-3">
      {icon}
      <span className={cn("cursor-pointer hover:underline hover:text-[#0969da] dark:hover:text-[#58a6ff]", active ? "font-medium text-[#24292f] dark:text-[#e6edf3]" : "text-[#24292f] dark:text-[#e6edf3]")}>{name}</span>
    </div>
    <div className="hidden md:flex col-span-6 items-center text-[#57606a] dark:text-[#8b949e] group-hover:text-[#0969da] dark:group-hover:text-[#58a6ff] cursor-pointer truncate pr-4">
      {commit}
    </div>
    <div className="hidden md:flex col-span-3 items-center justify-end text-[#57606a] dark:text-[#8b949e] whitespace-nowrap">
      {date}
    </div>
  </div>
);

const GoCode = () => (
  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" fill="currentColor">
    <path d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
  </svg>
)

export default GithubResume;
