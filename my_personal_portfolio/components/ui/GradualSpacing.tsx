"use client";

import { cn } from "@/app/lib/utils/cn";

interface GradualSpacingProps {
  text: string;
  className?: string;
}

export function GradualSpacing({
  text,
  className,
}: GradualSpacingProps) {
  return (
    <div className={cn("flex justify-center space-x-1", className)}>
      <h1
        className={cn(
          "drop-shadow-sm font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem] py-4",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
}