import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Writing & Notes | Abdul Wahab",
  description: "Technical essays and system design notes covering AI agents, backend scaling, and machine learning contests.",
};

export default function BlogIndex() {
  const articles = [
    {
      title: "Building Production-Grade AI Workflows",
      slug: "building-ai-workflows",
      date: "June 20, 2026",
      readTime: "6 min read",
      desc: "Strategies for handling reliability, error tracking, and routing in complex LLM-driven automation chains using n8n and LangGraph."
    },
    {
      title: "Scaling FastAPI Backends for Parallel LLM Workloads",
      slug: "fastapi-scaling",
      date: "May 15, 2026",
      readTime: "5 min read",
      desc: "Deep dive into ASGI, concurrency models, event loops, and why poorly managed async code can choke your parallel LLM API workloads."
    },
    {
      title: "Hard Lessons Learned from LangGraph Agents",
      slug: "langgraph-lessons",
      date: "April 02, 2026",
      readTime: "8 min read",
      desc: "An architectural review of state design, cyclic loops, and state pruning to keep token usage minimal and context relevant."
    },
    {
      title: "System Design Notes: High-Concurrency Ingestion",
      slug: "system-design-notes",
      date: "March 11, 2026",
      readTime: "7 min read",
      desc: "How we structured message queuing with BullMQ and Kafka to guarantee event delivery under extreme spike loads."
    },
    {
      title: "Stanford RNA 3D Folding Kaggle Writeup",
      slug: "kaggle-writeups",
      date: "February 24, 2026",
      readTime: "10 min read",
      desc: "Engineering custom spatial embeddings and optimizing memory usage to rank Top 2.5% globally in Stanford's structural ML challenge."
    }
  ];

  return (
    <main className="relative bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />
      
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 pt-32 pb-16 flex-grow animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Writing &amp; Notes</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono">
              Systems architecture • AI Agents • Competitive Coding
            </p>
          </div>

          <div className="space-y-6 border-t border-slate-100 dark:border-slate-800 pt-8">
            {articles.map((article, idx) => (
              <article key={idx} className="group border-b border-slate-100 dark:border-slate-800/50 pb-6 last:border-0 last:pb-0">
                <Link href={`/blog/${article.slug}`} className="block space-y-2">
                  <div className="flex justify-between items-baseline gap-4">
                    <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue transition-colors duration-150">
                      {article.title}
                    </h2>
                    <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">{article.date}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {article.desc}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400">
                    {article.readTime}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
