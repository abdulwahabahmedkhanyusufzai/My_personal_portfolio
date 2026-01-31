"use client";

import { cn } from "@/app/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        name: string;
        icon?: string;
        level?: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.name + idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="relative z-20 w-full p-4 rounded-2xl border border-gray-100 dark:border-white/[0.2] bg-white dark:bg-black group-hover:border-transparent dark:group-hover:border-transparent transition-colors duration-200 shadow-sm">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-slate-900">
                                {item.icon && (
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 object-contain"
                                    />
                                )}
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold tracking-wide text-gray-900 dark:text-gray-100 mt-2 text-sm sm:text-base">
                                    {item.name}
                                </h4>
                                {item.level && (
                                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        {item.level}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
