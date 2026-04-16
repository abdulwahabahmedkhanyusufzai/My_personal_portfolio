import { HiArrowLeft, HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black-100 flex flex-col">
      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-black-100/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-5 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-blue transition-colors group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-4">
            <h1 className="hidden md:block text-lg font-bold dark:text-white text-black">
              Abdul Wahab <span className="text-blue">Resume</span>
            </h1>
            <a
              href="/AbdulWahabSWE.pdf"
              download
              className="flex items-center gap-2 bg-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue/90 transition-colors shadow-lg shadow-blue/20"
            >
              <HiplDownload />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Resume Content Area */}
      <main className="flex-1 pt-24 pb-10 px-5 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl h-[calc(100vh-160px)] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
          <iframe
            src="/AbdulWahabSWE.pdf#view=FitH"
            className="w-full h-full border-none"
            title="Abdul Wahab Ahmed Khan - Resume"
          />
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="py-6 px-5 border-t border-black/5 dark:border-white/5 text-center">
        <p className="text-sm text-neutral-500" suppressHydrationWarning>
          © {new Date().getFullYear()} Abdul Wahab Ahmed Khan. Built with Next.js.
        </p>
      </footer>
    </div>
  );
}
