import { socialMedia, navItems } from "@/data";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-20 pb-10 border-t border-black/10 dark:border-white/10" id="contact">


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-black/5 dark:border-white/5 pt-16">
        {/* Logo & Bio */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter dark:text-white text-black">
              AWK<span className="text-blue">.</span>
            </span>
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
            Passionate MERN Stack Developer and AI enthusiast dedicated to building high-performance web applications and contributing to open-source.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold dark:text-white text-black">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold dark:text-white text-black">Connect</h4>
          <div className="flex items-center gap-4">
            {socialMedia.map((info) => (
              <Link
                href={info.link}
                target="_blank"
                key={info.id}
                className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-gray-100 dark:bg-black-200 rounded-full border border-gray-300 dark:border-black-300 hover:scale-110 transition-transform"
              >
                <info.icon className="text-lg" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400" suppressHydrationWarning>
          © {currentYear} Abdul Wahab Ahmed Khan. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-neutral-500 hover:text-blue">Privacy Policy</Link>
          <Link href="#" className="text-xs text-neutral-500 hover:text-blue">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
