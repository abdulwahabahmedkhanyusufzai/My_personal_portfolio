"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils/cn";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left - rect.width / 2) / 20;
    const y = (clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "mx-auto w-full relative rounded-3xl overflow-hidden bg-neutral-50 dark:bg-slate-950 p-8 shadow-xl border border-neutral-200/80 dark:border-white/10",
        containerClassName
      )}
    >
      <div
        style={{
          transform: isHovered
            ? `translate3d(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px, 0)`
            : "translate3d(0, 0, 0)",
          transition: "transform 0.1s ease-out",
        }}
        className={cn("h-full", className)}
      >
        {children}
      </div>
    </motion.section>
  );
};
