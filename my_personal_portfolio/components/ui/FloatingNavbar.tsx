"use client"
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { cn } from "@/app/lib/utils/cn";
import { JSX } from "react";
import { ModeToggle } from "./ModeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  const [visible, setVisible] = useState(true);

  // Simplified scroll logic without framer-motion specifics if possible,
  // but useScroll is from framer-motion. I need to remove useScroll too.
  // Replacing with standard window scroll listener.

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction === "down" &&
        scrollY - lastScrollY > 10
      ) {
        setVisible(false);
      } else if (direction === "up" || scrollY < 50) {
        setVisible(true);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-2xl border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 translation-all duration-300",
        "backdrop-blur-xl bg-white/75 dark:bg-black-100/75 border-black/10 dark:border-white/[0.125]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20 pointer-events-none",
        className
      )}
    >
      {navItems.map(
        (
          navItem: {
            name: string;
            link: string;
            icon?: JSX.Element;
          },
          idx: number
        ) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        )
      )}
      <ModeToggle />
    </div>
  );
};