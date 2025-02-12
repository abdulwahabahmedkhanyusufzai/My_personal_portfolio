"use client";

import { cn } from "@/app/lib/utils/cn";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 20,
  borderWidth = 2,
  duration = 14,
  color = "#A07CFE",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "relative w-full flex justify-center rounded-lg p-3 text-black dark:text-white overflow-hidden",
        className
      )}
      style={ {
        "--border-radius": `${borderRadius}px`,
      } as React.CSSProperties
    }
    >
      {/* Animated Border */}
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
              color instanceof Array ? color.join(",") : color
            },transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:size-full before:rounded-[2rem] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
      ></div>
      {/* Content */}
      {children}
    </div>
  );
}
