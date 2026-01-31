"use client";



import { cn } from "@/app/lib/utils/cn";

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#0E162B",
  gradientOpacity = 0.8,
}: MagicCardProps) {
  return (
    <div
      className={cn(
        "group relative flex size-full p-5 overflow-hidden rounded-lg border-2 border-gray-200 dark:border-[#0E162B] text-black dark:text-white hover:border-blue-500 transition-colors duration-300 hover:shadow-lg",
        className
      )}
    >
      <div className="relative z-10 lg:min-h-[32.5rem] h-[25rem] w-full">
        {children}
      </div>
    </div>
  );
}
