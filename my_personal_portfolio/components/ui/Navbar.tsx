"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils/cn";
import { ModeToggle } from "./ModeToggle";
import { navItems, socialMedia } from "@/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const prev = scrollY.getPrevious() ?? 0;
      const direction = current - prev;

      setScrolled(current > 20);

      if (current < 100) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed top-4 inset-x-0 z-[5000] mx-auto w-[92vw] sm:w-[90vw] md:w-fit md:min-w-[60vw] max-w-5xl transition-all duration-300 border shadow-lg rounded-full px-6 py-2 sm:py-3",
          scrolled
            ? "bg-white/80 dark:bg-black-100/70 border-black/10 dark:border-white/10 backdrop-blur-md"
            : "bg-white/90 dark:bg-black-100/90 border-black/5 dark:border-white/5 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center justify-between w-full gap-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tighter text-brand-primary dark:text-brand-secondary">
                AWK<span className="text-brand-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Center: Nav Items (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/resume" 
              className="text-xs font-bold text-neutral-600 dark:text-neutral-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors border border-black/10 dark:border-white/10 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            >
              Resume
            </Link>
          </div>

          {/* Right: Socials & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              {socialMedia.map((social) => (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
            <ModeToggle />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-xl text-neutral-600 dark:text-neutral-300 p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black-100 border border-black/10 dark:border-white/10 mt-2 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-3 p-5 text-center">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-brand-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/resume"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-brand-primary"
                >
                  View Resume
                </Link>
                
                <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1" />
                
                <div className="flex items-center gap-4 justify-center py-1">
                  {socialMedia.map((social) => (
                    <Link
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      className="text-neutral-600 dark:text-neutral-300 hover:text-brand-primary transition-colors"
                    >
                      <social.icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};
