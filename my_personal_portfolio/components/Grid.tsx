import React from 'react'
import { GradualSpacing } from "./ui/GradualSpacing";
import Image from 'next/image';
import { aboutData } from '@/data';
import { MagicCard } from './ui/Card';

const Grid = () => {
  return (
    <section id="about" className="py-20">
      <div className="container flex flex-col items-center">
        <GradualSpacing text="About Me" />

        <div className="w-full max-w-5xl mt-10">
          <MagicCard className="p-8 md:p-12" titleClassName="h-auto lg:min-h-fit">
            <div className="flex gap-x-12 gap-y-10 flex-col items-center md:items-start text-center md:text-start md:flex-row w-full font-cairo">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-full overflow-hidden size-40 md:size-60 border-2 border-white dark:border-[#000319]">
                  <Image
                    src="/my_picture.jpg"
                    alt="Abdul Wahab Ahmed Khan"
                    width={400}
                    height={400}
                    className="rounded-full w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-primary dark:text-brand-secondary">
                  Architecting Future-Proof Systems
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg leading-relaxed font-medium">
                  I’m <span className="text-black dark:text-white font-bold">Abdul Wahab Ahmed Khan</span>, a Software Engineer dedicated to building high-performance backend systems and robust machine learning infrastructure. I specialize in distributed architectures, optimizing data-intensive pipelines, and fine-tuning large language models to solve complex real-world challenges.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 w-full pt-10 border-t border-black/5 dark:border-white/5">
                  {aboutData.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center md:items-start"
                    >
                      <span className="text-4xl font-black text-brand-primary dark:text-brand-secondary">
                        {item.number === 1000 ? "1K+" : `+${item.number}`}
                      </span>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-500 mt-1">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  )
}

export default Grid
