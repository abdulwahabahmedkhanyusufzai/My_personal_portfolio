"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import { cn } from "@/app/lib/utils/cn"

export function ModeToggle({ className }: { className?: string }) {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className={cn("w-9 h-9", className)} /> // Placeholder to prevent layout shift
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
                "p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400",
                "bg-neutral-200 text-neutral-800 hover:bg-neutral-300",
                "dark:bg-slate-800 dark:text-neutral-200 dark:hover:bg-slate-700 dark:focus:ring-neutral-600",
                className
            )}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <FiSun className="h-5 w-5" />
            ) : (
                <FiMoon className="h-5 w-5" />
            )}
        </button>
    )
}
