"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils/cn";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const beams: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      width: number;
    }> = [];

    // Initialize 15 custom light beams
    for (let i = 0; i < 15; i++) {
      beams.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        length: Math.random() * 400 + 150,
        speed: Math.random() * 0.8 + 0.3, // Slow premium drift
        opacity: Math.random() * 0.25 + 0.05,
        width: Math.random() * 1.5 + 0.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      beams.forEach((beam) => {
        beam.y += beam.speed;
        if (beam.y > height) {
          beam.y = -beam.length;
          beam.x = Math.random() * width;
        }

        // Draw light beam with fading gradient
        const beamGradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x,
          beam.y + beam.length
        );
        
        // Brand primary is purple-ish blue, brand secondary is deep purple
        beamGradient.addColorStop(0, "rgba(99, 102, 241, 0)");
        beamGradient.addColorStop(
          0.5,
          `rgba(99, 102, 241, ${beam.opacity})`
        );
        beamGradient.addColorStop(1, "rgba(168, 85, 247, 0)");

        ctx.strokeStyle = beamGradient;
        ctx.lineWidth = beam.width;
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x, beam.y + beam.length);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none overflow-hidden -z-10",
        className
      )}
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-70 dark:opacity-50" />
    </div>
  );
};
