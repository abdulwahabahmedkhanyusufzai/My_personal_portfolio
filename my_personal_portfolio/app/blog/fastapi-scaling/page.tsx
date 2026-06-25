import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Scaling FastAPI Backends for Parallel LLM Workloads | Abdul Wahab",
  description: "Deep dive into ASGI, concurrency models, event loops, and why poorly managed async code can choke your parallel LLM API workloads.",
};

export default function FastAPIScaling() {
  return (
    <main className="relative bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />
      
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 pt-32 pb-16 flex-grow animate-fade-in">
        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-4 border-b border-slate-100 dark:border-slate-800 pb-6">
            <Link 
              href="/blog" 
              className="text-xs font-mono text-slate-500 hover:text-primary dark:hover:text-blue transition-colors"
            >
              &larr; Back to Writing
            </Link>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-900 dark:text-white">
                Scaling FastAPI Backends for Parallel LLM Workloads
              </h1>
              <p className="text-xs font-mono text-slate-400">
                Published on May 15, 2026 • 5 min read
              </p>
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            <p>
              When building AI APIs, the bottleneck is rarely database access or network latency. It’s model inference or parallel API requests. A common pitfall is blocking the FastAPI event loop, leading to disastrous API response spikes. Here is how to scale it.
            </p>
            
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 pt-4">1. The Difference between `def` and `async def`</h2>
            <p>
              FastAPI runs `async def` routes directly on the main event loop, assuming they only use non-blocking libraries (e.g., `httpx` or `asyncpg`). If you perform a blocking synchronous call inside `async def` (like using `requests` or `time.sleep`), the entire server halts and waits.
            </p>
            <p>
              Conversely, route handlers defined with normal `def` are run in an external thread pool managed by Starlette. If you use synchronous packages, use `def`. But for LLMs, you want to use true async execution with non-blocking network libraries.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 pt-4">2. Parallel Task Execution with `asyncio.gather`</h2>
            <p>
              When a user request requires calling multiple LLM models (for example, generating title, text, and keywords simultaneously), executing them sequentially is slow. We use `asyncio.gather` to dispatch them in parallel:
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded p-4 font-mono text-xs overflow-x-auto whitespace-pre leading-normal text-slate-700 dark:text-slate-300">
{`import asyncio

async def generate_post(prompt: str):
    # Dispatch tasks concurrently to the event loop
    title_task = call_llm(f"Write title for: {prompt}")
    body_task = call_llm(f"Write content for: {prompt}")
    
    title, body = await asyncio.gather(title_task, body_task)
    return {"title": title, "body": body}`}
            </div>

            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 pt-4">3. Offloading CPU-Bound Operations</h2>
            <p>
              LLM data ingestion often requires processing text (regex parsing, PDF text extraction, or embedding calculation). These are CPU-bound operations. Running them inside the event loop blocks all other API requests. Offload these tasks to Python&apos;s `ProcessPoolExecutor` or run them asynchronously via a worker queue like Celery or BullMQ.
            </p>

            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 pt-4">Summary</h2>
            <p>
              By ensuring all LLM gateway requests use `asyncio`-friendly libraries, separating CPU-heavy processing into child processes or external workers, and executing independent calls concurrently, FastAPI can process thousands of concurrent AI system interactions on a single-core machine.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
