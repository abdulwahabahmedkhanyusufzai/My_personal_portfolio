import React from 'react'

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-4 items-center justify-center rounded-xl border border-brand-primary/30 dark:border-white/10 bg-white dark:bg-[#000319] px-7 text-sm font-semibold text-neutral-800 dark:text-white transition-all active:scale-95 hover:border-brand-primary dark:hover:border-brand-primary/50 hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 gap-2 focus:outline-none shadow-sm hover:shadow-md ${otherClasses}`}
      onClick={handleClick}
    >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
