import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Selected Work | Abdul Wahab",
  description: "Systems-focused project portfolio, including scientific image forgery detection, pixxi CRM AI, and distributed systems.",
};

export default function Work() {
  const projectsList = [
    {
      num: "01",
      title: "Scientific Image Forgery Detection",
      subtitle: "Production-grade scientific document verification system",
      desc: "Architected a dual-stage deep learning pipeline leveraging custom CNN architectures and DINOv2 feature embeddings. Optimised model inference utilizing TensorRT, reducing p99 latency to less than 150ms on memory-constrained GPUs. Wrapped in a high-throughput FastAPI service communicating via gRPC with background workers.",
      stack: "FastAPI • PyTorch • DINOv2 • Docker • gRPC • TensorRT",
      link: "/work", // or a specific link, since this is work page we can just make it look good
      primaryLinkText: "In Production",
      disabled: true
    },
    {
      num: "02",
      title: "pixxi CRM AI",
      subtitle: "Multi-agent real estate operations orchestrator",
      desc: "Designed and deployed event-driven automation systems to process incoming leads and synchronize CRMs in real-time. Built a scalable multi-agent reasoning workflow using n8n and LangGraph, routing queries dynamically based on semantic intent and agent loads. Integrated voice synthesis and notification alerts.",
      stack: "FastAPI • n8n • LangGraph • Google Vertex AI • Gemini • PostgreSQL",
      link: "/projects/ai-automation",
      primaryLinkText: "Case Study &rarr;",
      disabled: false
    },
    {
      num: "03",
      title: "Medicare Platform",
      subtitle: "High-throughput microservices healthcare architecture",
      desc: "Built a fully-observable Spring Boot microservices backend secured by Keycloak and HashiCorp Vault. Configured an Apache Kafka messaging backbone for asynchronous message ingestion and real-time patient status events. Integrated a pgvector semantic RAG search assistant to query structured clinical documents.",
      stack: "Spring Boot • Apache Kafka • Kubernetes • Istio • pgvector • Keycloak",
      link: "https://github.com/abdulwahabahmedkhanyusufzai",
      primaryLinkText: "GitHub &rarr;",
      disabled: false
    },
    {
      num: "04",
      title: "Distributed Media Streaming Platform",
      subtitle: "Scalable chunk-based streaming engine",
      desc: "Built a low-latency video streaming backend delivering optimized chunk-based media payloads. Configured JWT authentication pipelines, stateless API sessions, and database index optimization in PostgreSQL to handle high-concurrency watch-time queries.",
      stack: "Java • Spring Boot • PostgreSQL • Redis • Docker • Nginx",
      link: "https://github.com/abdulwahabahmedkhanyusufzai",
      primaryLinkText: "GitHub &rarr;",
      disabled: false
    }
  ];

  return (
    <main className="relative bg-white dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar />
      
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 pt-32 pb-16 flex-grow animate-fade-in">
        <div className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Selected Work</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono">
              AI workflows • Distributed backends • Systems engineering
            </p>
          </div>

          <div className="space-y-12 border-t border-slate-100 dark:border-slate-800 pt-8">
            {projectsList.map((project, idx) => (
              <div key={idx} className="group flex flex-col sm:flex-row sm:gap-6 justify-between border-b border-slate-100 dark:border-slate-800/50 pb-8 last:border-0 last:pb-0">
                <span className="text-xs font-mono text-slate-400 w-12 pb-2 sm:pb-0">{project.num}</span>
                <div className="flex-1 space-y-3">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.stack}
                    </span>
                    
                    {project.disabled ? (
                      <span className="text-xs font-mono text-slate-400 select-none">
                        {project.primaryLinkText}
                      </span>
                    ) : (
                      project.link.startsWith("http") ? (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-primary dark:text-blue hover:underline font-semibold"
                        >
                          {project.primaryLinkText}
                        </a>
                      ) : (
                        <Link 
                          href={project.link}
                          className="text-xs font-mono text-primary dark:text-blue hover:underline font-semibold"
                        >
                          {project.primaryLinkText}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
