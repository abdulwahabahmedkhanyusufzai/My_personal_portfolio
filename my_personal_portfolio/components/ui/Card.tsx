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
        "group relative flex size-full p-5 overflow-hidden rounded-lg border-2 border-gray-200 dark:border-white/[0.1] bg-transparent dark:bg-black-100/50 text-black dark:text-white hover:border-blue-500 dark:hover:border-blue-500/50 transition-colors duration-300 hover:shadow-lg",
        className
      )}
    >
      <div className={cn("relative z-10 w-full", titleClassName || "lg:min-h-[32.5rem] h-[25rem]")}>
        {children}
      </div>
    </div>
  );
}
