"use client";

import { cn } from "@/app/lib/utils/cn";

export function MagicCard({
  children,
  className,
  titleClassName,
}: {
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex size-full p-5 overflow-hidden rounded-xl border border-brand-primary/30 dark:border-white/10 bg-white dark:bg-[#000319] text-black dark:text-white transition-all duration-300 hover:border-brand-primary dark:hover:border-brand-primary/50 hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 shadow-sm hover:shadow-md",
        className
      )}
    >
      <div className={cn("relative z-10 w-full", titleClassName)}>
        {children}
      </div>
    </div>
  );
}
