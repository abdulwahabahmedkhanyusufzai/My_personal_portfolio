"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils/cn";
import { ModeToggle } from "./ModeToggle";
import { navItems, socialMedia } from "@/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-[5000] w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-white/80 dark:bg-black-100/80 backdrop-blur-md border-black/10 dark:border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1 md:flex-initial">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-brand-primary dark:text-brand-secondary">
              AWK<span className="text-brand-primary">.</span>
            </span>
          </Link>
        </div>

        {/* Center: Nav Items (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-[2]">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue dark:hover:text-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/resume" 
            className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue dark:hover:text-blue transition-colors border border-black/10 dark:border-white/10 px-3 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
          >
            Resume
          </Link>
        </div>

        {/* Right: Socials & Theme Toggle */}
        <div className="hidden md:flex items-center justify-end gap-6 flex-1">
          <div className="flex items-center gap-3">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                className="text-neutral-600 dark:text-neutral-300 hover:text-blue dark:hover:text-blue transition-colors"
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
          <ModeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-neutral-600 dark:text-neutral-300"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white dark:bg-black-100 border-b border-black/10 dark:border-white/10 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 p-5 text-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/resume"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-blue"
          >
            View Resume
          </Link>
          
          <div className="h-[1px] bg-black/10 dark:border-white/10 my-2" />
          
          <div className="flex items-center gap-6 justify-center py-2">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                className="text-neutral-600 dark:text-neutral-300 hover:text-blue transition-colors"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
