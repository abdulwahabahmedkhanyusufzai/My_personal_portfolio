import { z } from "zod";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiKaggle, SiCodechef } from "react-icons/si";

const AtCoderIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5v-11l8 5.5-8 5.5z"/>
  </svg>
);
import { FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaTrophy } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaBriefcase /> },
  { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
  { name: "Achievements", link: "#achievements", icon: <FaTrophy /> },
  { name: "Skills", link: "#skills", icon: <FaBriefcase /> },
  { name: "Education", link: "#education", icon: <FaGraduationCap /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "/python.svg" },
      { name: "Java", icon: "/java.svg" },
      { name: "Go", icon: "/go.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "C++", icon: "/c.svg" },
      { name: "SQL", icon: "/sql.png" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: "/pytorch.svg" },
      { name: "TensorFlow", icon: "/tensorflow.svg" },
      { name: "JAX", icon: "/jax.png" },
      { name: "Scikit-Learn", icon: "/sk-learn.png" },
      { name: "LangGraph", icon: "/machine-learning-model.svg" },
      { name: "LangChain", icon: "/machine-learning-model.svg" },
      { name: "Vertex AI", icon: "/gcloud.svg" },
      { name: "Gemini", icon: "/gcloud.svg" },
      { name: "OpenCV" },
    ],
  },
  {
    category: "Backend Engineering",
    skills: [
      { name: "FastAPI", icon: "/restapi.svg" },
      { name: "Spring Boot", icon: "/spring.svg" },
      { name: "NestJS", icon: "/ts.svg" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Redis", icon: "/redis.svg" },
      { name: "REST APIs", icon: "/restapi.svg" },
      { name: "gRPC" },
      { name: "Apache Kafka" },
    ],
  },
  {
    category: "Automation & Agentic Systems",
    skills: [
      { name: "n8n", icon: "/app.svg" },
      { name: "Multi-Agent Workflows", icon: "/app.svg" },
      { name: "RAG Systems", icon: "/restapi.svg" },
      { name: "Vector Databases", icon: "/sql.png" },
      { name: "Pinecone", icon: "/sql.png" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: "/dock.svg" },
      { name: "Kubernetes", icon: "/cloud.svg" },
      { name: "Linux", icon: "/linux.svg" },
      { name: "Google Cloud Platform (GCP)", icon: "/gcloud.svg" },
      { name: "CI/CD", icon: "/git.svg" },
      { name: "GitHub Actions", icon: "/git.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Redis", icon: "/redis.svg" },
      { name: "Supabase" },
      { name: "PGVector", icon: "/sql.png" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Scientific Image Forgery Detection API",
    des: "Engineered a high-performance REST microservice using FastAPI to serve a 344MB custom CNN-DINOv2 hybrid PyTorch model, enabling automated detection of manipulated scientific and medical images.",
    img: "/Screenshot 2026-07-02 165820.png",
    iconLists: ["/pytorch.svg", "/restapi.svg", "/dock.svg", "/linux.svg", "/git.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai/scientific-image-forgery-detection",
    demoLink: "https://forgey-ml.automationdev.app",
    caseStudy: {
      challenge: "Deploying a large 344MB PyTorch model on a strictly constrained 1vCPU / 2GB RAM cloud server risked constant kernel Out-Of-Memory (OOM) panics. Additionally, remote server synchronization struggled with Git LFS pointer corruption and slow container build cycles.",
      solution: "Provisioned and configured a custom 4GB SSD swap space to guarantee stable model initialization. Built a containerized deployment pipeline utilizing the uv package manager to achieve sub-20-second builds, and optimized inference by implementing Test-Time Augmentation (TTA) and adaptive Sobel morphological filtering for dynamic confidence thresholding.",
      results: [
        "Prevented catastrophic Out-Of-Memory (OOM) crashes during model initialization.",
        "Accelerated remote server container builds to under 20 seconds using the uv package manager.",
        "Resolved Git Large File Storage (LFS) pointer corruption during deployment synchronization.",
        "Productionized award-winning CNN-DINOv2 hybrid architecture into a production-ready microservice."
      ]
    }
  },
  {
    id: 2,
    title: "Real Estate Automation CRM",
    des: "Built distributed n8n pipelines and intent scoring models to aggregate multi-source streams, extracting entities and routing leads in real-time under tight host constraints.",
    img: "/Screenshot 2026-07-02 083310.png",
    iconLists: ["/next.svg", "/restapi.svg", "/pytorch.svg", "/app.svg", "/sql.png", "/dock.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai/omnichannel-ai-lead-orchestration",
    demoLink: "https://ai.automationdev.app",
    caseStudy: {
      challenge: "Normalizing noisy and highly unstructured data from multi-channel streams (emails, chats) required real-time extraction and classification. The system also had to be highly cost-effective and deployable on low-spec 1vCPU/2GB hosts without OOM issues.",
      solution: "Developed an event-driven ingestion pipeline with n8n to aggregate multi-source webhooks into Supabase. Engineered a channel-aware FastAPI layer to normalize noisy payloads, paired with a PyTorch intent scoring engine utilizing feed-forward networks, and optimized edge host memory limits via custom SSD swap and tensor memory management.",
      results: [
        "Eliminated 100% of manual data entry by automating lead qualification and CRM sync.",
        "Reduced enterprise sales cycles and customer response times to near-zero latency.",
        "Saved an estimated 40+ hours weekly across booking and staffing pipelines.",
        "Optimized edge deployments with zero OOM panics on budget 2GB cloud servers."
      ]
    }
  },
  {
    id: 3,
    title: "Distributed Patient Management System",
    des: "Designed a high-concurrency, zero-trust healthcare system with gRPC microservices, a RAG search assistant, and self-healing GitOps pipelines.",
    img: "/p4.svg",
    iconLists: ["/java.svg", "/dock.svg", "/cloud.svg", "/git.svg", "/sql.png"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai/patient-management-system",
    demoLink: "",
    caseStudy: {
      challenge: "Healthcare systems demand strict zero-trust data security, high availability, and rapid record retrieval while maintaining solid data consistency across distributed database boundaries under concurrent loads.",
      solution: "Enforced zero-trust security with Istio mTLS, HashiCorp Vault, and Keycloak. Architected Spring Boot microservices with Apache Kafka and the Transactional Outbox pattern. Integrated a RAG-based AI assistant using Spring AI and PGVector, and set up automated self-healing GitOps pipelines via ArgoCD.",
      results: [
        "Achieved sub-200ms p99 latency validated through K6 load testing in CI/CD.",
        "Reduced administrative retrieval time by 80% via the Spring AI and PGVector search engine.",
        "Ensured 99.99% uptime with automated canary rollouts and ArgoCD pipelines.",
        "Validated fault tolerance with Chaos Mesh fault-injection and Resilience4j circuit breakers."
      ]
    }
  },
  {
    id: 4,
    title: "High-Concurrency AI Orchestrator",
    des: "Engineered distributed orchestration in Go using worker pools to manage parallel LLM API workloads and maximize request throughput.",
    img: "/p3.svg",
    iconLists: ["/go.svg", "/dock.svg", "/linux.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai/high-concurrency-ai-orchestrator",
    demoLink: "",
    caseStudy: {
      challenge: "Handling bursty and high-volume parallel workloads to third-party LLM APIs requires strict concurrency control to avoid memory exhaustion, API rate-limit violations, and thread blockages.",
      solution: "Engineered distributed execution pipelines in Go using optimized worker pools and thread-safe channels to manage parallel API workloads. Implemented custom rate-limiting queues and error-recovery retry mechanisms.",
      results: [
        "Maximized system throughput and request reliability under heavy load.",
        "Guaranteed concurrency-safe pipelines utilizing Go channels for message passing.",
        "Eliminated deadlocks and goroutine leaks during parallel LLM inference workloads."
      ]
    }
  }
];

export const workExperience = [
  {
    id: 1,
    title: "AI Automation Engineer",
    company: "Veltra AI Solution UK",
    thumbnail: "/277720484.jpeg",
    location: "Remote",
    date: "Mar 2025 – Present",
    desc: [
      "Automated end-to-end real estate operations—including lead qualification and CRM synchronization—eliminating 100% of manual data entry by architecting event-driven systems using n8n, Google Vertex AI, and Gemini.",
      "Accelerated enterprise sales cycles and client response times to near-zero latency by building scalable, multi-agent reasoning workflows integrated with ElevenLabs, Telegram, and custom LLM routing APIs.",
      "Reduced operational overhead across staffing and booking pipelines by an estimated 40+ hours weekly, by designing and deploying distributed, fault-tolerant automation pipelines for seamless data synchronization."
    ],
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "QF Network",
    thumbnail: "/qf_network.png",
    location: "Karachi, Pakistan",
    date: "Mar 2025 – Apr 2026",
    desc: [
      "Reduced p99 API latency by 40% by redesigning database schema and implementing composite B-Tree indexing in PostgreSQL.",
      "Built a semantic search engine using pgvector (HNSW) for fast retrieval across 10,000+ product records.",
      "Developed an LLM-powered onboarding system, reducing manual onboarding time from hours to under 5 minutes (95% improvement).",
      "Designed a distributed job processing system using BullMQ and Redis, enabling scalable asynchronous task execution."
    ],
    className: "md:col-span-2",
  },
];

export const appliedML = [
  {
    id: 1,
    title: "Recod.ai Scientific Image Forgery Detection",
    rank: "Silver Medal (Top 7.2%, 114/1564)",
    category: "Computer Vision",
    desc: "Engineered hybrid deep learning models to accurately detect and segment copy-move forgeries in biomedical research images; successfully productionized the winning CNN-DINOv2 architecture into a standalone FastAPI microservice.",
  },
  {
    id: 2,
    title: "CAFA 6 Protein Function Prediction",
    rank: "Bronze Medal (Top 3.6%, 83/2259)",
    category: "Bioinformatics",
    desc: "Developed predictive biological function models for complex protein sequences, optimizing inference and data processing pipelines for large-scale bioinformatics datasets.",
  },
  {
    id: 3,
    title: "Stanford RNA 3D Folding",
    rank: "Rank: 55/2,226 (Top 2.5%)",
    category: "Structural Biology",
    desc: "Trained Transformer/CNN models with custom spatial embeddings; optimized GPU pipelines for memory-constrained biological datasets.",
  },
  {
    id: 4,
    title: "Thermophysical Property Prediction",
    rank: "Rank: 62/1,176 (Top 5%)",
    category: "Cheminformatics",
    desc: "Developed regression models using SMILES-based graph features to predict molecular properties with improved convergence stability.",
  },
  {
    id: 5,
    title: "NVIDIA Nemotron Reasoning Challenge",
    rank: "Top 16%",
    category: "LLM Fine-Tuning",
    desc: "Performed supervised fine-tuning (SFT) on foundational LLMs using reasoning datasets to improve multi-step logical consistency.",
  },
];

export const competitiveProgramming = [
  {
    id: 1,
    platform: "LeetCode",
    rank: "Guardian (Contest Rating 2235)",
    desc: "Solved 1000+ problems, ranked in the Top 0.75% globally out of millions of users.",
  },
  {
    id: 2,
    platform: "CodeChef",
    rank: "6-Star (Rating 2231)",
    desc: "Ranked Top 1st in Pakistan and 493rd globally across the entire platform.",
  },
  {
    id: 3,
    platform: "Codeforces",
    rank: "Specialist (Max Rating 1477)",
    desc: "Active competitive programmer with a strong focus on graph theory, dynamic programming, and number theory.",
  },
  {
    id: 4,
    platform: "AtCoder",
    rank: "Cyan (Rating 1200)",
    desc: "Ranked 67th globally in ABC 453, achieving Cyan in competitive algorithms.",
  },
];

export const education = [
  {
    id: 1,
    institution: "Virtual University of Pakistan",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    date: "Expected 2029",
    location: "Karachi, Pakistan",
    desc: "Pursuing Bachelor's degree in Computer Science, building strong foundations in system engineering and core computing.",
    grade: "BSCS Candidate",
    coursework: [
      "Data Structures & Algorithms",
      "Systems Architecture",
      "Discrete Mathematics",
      "Calculus",
      "Object Oriented Programming",
      "Statistics and Probability"
    ],
  },
];

const projectsCompleted = 12;

export const aboutData = [
  {
    number: 1,
    text: "Year of Experience",
  },
  {
    number: projectsCompleted,
    text: "Systems & ML Projects",
  },
  {
    number: 1000,
    text: "LeetCode Problems",
  },
];

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(255, { message: "First name is too long" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z
    .string()
    .min(4, { message: "Phone number is too short" })
    .regex(
      /^\+\d{1,3}\d{4,14}$/,
      "Phone Number Format: +[country code][number] (e.g., +1234567890)"
    ),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
});

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/abdulwahabahmedkhanyusufzai",
    icon: FaGithub,
  },
  {
    id: 2,
    link: "https://leetcode.com/u/abdulwahabahmedkhanyusufzai/",
    icon: SiLeetcode,
  },
  {
    id: 3,
    link: "https://www.codechef.com/users/abdulwahabusuf",
    icon: SiCodechef,
  },
  {
    id: 4,
    link: "https://codeforces.com/profile/abdulwahab121",
    icon: SiCodeforces,
  },
  {
    id: 5,
    link: "https://atcoder.jp/users/abdulwahab121",
    icon: AtCoderIcon,
  },
  {
    id: 6,
    link: "https://www.kaggle.com/abdulwahab2321",
    icon: SiKaggle,
  },
];
