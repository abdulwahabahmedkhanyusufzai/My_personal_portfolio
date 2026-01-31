/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { cn } from "@/app/lib/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <span
              key={word + idx}
              className={`${idx > 3 ? "text-blue" : "dark:text-white text-black"}`}
            >
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
