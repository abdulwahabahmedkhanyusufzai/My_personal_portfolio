import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Case Study: AI Automation SaaS | Abdul Wahab",
  description: "An in-depth look at building a multi-agent orchestration workflow to automate enterprise operations.",
};

export default function AIAutomationCaseStudy() {
  return (
    <main className="relative bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />
      
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 pt-32 pb-16 flex-grow animate-fade-in">
        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <Link 
              href="/work" 
              className="text-xs font-mono text-slate-500 hover:text-primary dark:hover:text-blue transition-colors"
            >
              &larr; Back to Work
            </Link>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-900 dark:text-white">
                Case Study: AI Automation SaaS
              </h1>
              <p className="text-sm font-mono text-slate-500">
                Multi-agent Orchestration for Real Estate Operations
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-0.5 text-[10px] font-mono border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">FastAPI</span>
              <span className="px-2 py-0.5 text-[10px] font-mono border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">n8n</span>
              <span className="px-2 py-0.5 text-[10px] font-mono border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">LangGraph</span>
              <span className="px-2 py-0.5 text-[10px] font-mono border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">Vertex AI</span>
              <span className="px-2 py-0.5 text-[10px] font-mono border border-slate-200 dark:border-slate-800 rounded bg-slate-50 dark:bg-slate-900/50">PostgreSQL</span>
            </div>
          </div>

          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="text-sm font-mono uppercase text-slate-400 tracking-wider">Overview</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              At Veltra AI, we built an end-to-end automation platform for a UK-based real estate enterprise. The objective was to eliminate manual entry from incoming leads, qualify them via dynamic conversational intelligence, and synchronize booking engines and CRMs. The resulting system saved over 40 hours of manual coordination per week and reduced response latency to under 5 seconds.
            </p>
          </section>

          {/* Section 2: Architecture */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase text-slate-400 tracking-wider">System Architecture</h2>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded p-4 font-mono text-[10px] sm:text-xs overflow-x-auto whitespace-pre leading-normal text-slate-700 dark:text-slate-300">
{`[Webhooks / Lead Sources] ──> [FastAPI Gateway]
                                    │ (Auth & Ingestion)
                                    ▼
                          [n8n Automation Engine]
                                    │
                                    ├───> [LangGraph Router]
                                    │        │
                                    │        ├───> [Qualification Agent]
                                    │        ├───> [CRM Sync Agent]
                                    │        └───> [Scheduling Agent]
                                    ▼
                           [PostgreSQL State]`}
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              The entrypoint is a FastAPI gateway that validates webhooks, performs token verification, and normalizes unstructured schemas. Incoming data is pushed to an event-driven n8n workflow. The core routing logic runs on LangGraph, enabling cycle-based agent states where each step evaluates the user&apos;s intent and accesses vector memories in PostgreSQL.
            </p>
          </section>

          {/* Section 3: Technical Execution */}
          <section className="space-y-4">
            <h2 className="text-sm font-mono uppercase text-slate-400 tracking-wider">Key Engineering Challenges</h2>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">1. Context Window & State Overhead</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Multi-step workflows are susceptible to state explosion. By designing a highly-focused state schema in LangGraph, we pruned history variables at check-points, sending only relevant delta states to Gemini models.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">2. Fault-Tolerant CRM Synchronization</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Third-party APIs frequently experience downtime. We configured n8n&apos;s queue management with exponential back-off and dead-letter queues in BullMQ, ensuring no webhook event was ever lost during system disruptions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Results */}
          <section className="space-y-3">
            <h2 className="text-sm font-mono uppercase text-slate-400 tracking-wider">System Metrics & Business Impact</h2>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm space-y-1">
              <li><strong className="text-slate-800 dark:text-slate-200">100%</strong> automation of manual lead entry and formatting.</li>
              <li><strong className="text-slate-800 dark:text-slate-200">40+ hours</strong> saved weekly in manual operations.</li>
              <li><strong className="text-slate-800 dark:text-slate-200">&lt;5s response time</strong> down from an average of 4 hours.</li>
              <li>Increased lead conversion efficiency by <strong className="text-slate-800 dark:text-slate-200">15%</strong> due to instant booking scheduling.</li>
            </ul>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
