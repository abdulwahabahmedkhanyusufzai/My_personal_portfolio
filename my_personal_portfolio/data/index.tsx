import { z } from "zod";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiLeetcode, SiCodeforces, SiKaggle, SiCodechef } from "react-icons/si";

import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaEnvelope, FaCode, FaMicrochip, FaServer, FaTerminal } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about", icon: <FaUser /> },
  { name: "Projects", link: "#projects", icon: <FaBriefcase /> },
  { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
  { name: "Education", link: "#education", icon: <FaGraduationCap /> },
  { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: "/c.svg", level: "Expert" },
      { name: "Python", icon: "/python.svg", level: "Expert" },
      { name: "Go", icon: "/go.svg", level: "Advanced" },
      { name: "TypeScript", icon: "/ts.svg", level: "Advanced" },
      { name: "Java", icon: "/java.svg", level: "Advanced" },
      { name: "SQL", icon: "/sql.png", level: "Advanced" },
    ],
  },
  {
    category: "ML Infrastructure",
    skills: [
      { name: "JAX", icon: "/jax.png", level: "Expert" },
      { name: "PyTorch", icon: "/pytorch.svg", level: "Advanced" },
      { name: "XLA", icon: "/xla.png", level: "Advanced" },
      { name: "Scikit-learn", icon: "/sk-learn.png", level: "Expert" },
      { name: "NumPy", icon: "/np.png", level: "Expert" },
      { name: "Pandas", icon: "/pd.png", level: "Expert" },
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: "/node-js.svg", level: "Expert" },
      { name: "Spring Boot", icon: "/spring.svg", level: "Advanced" },
      { name: "BullMQ", icon: "/bullmq.png", level: "Advanced" },
      { name: "Redis", icon: "/redis.svg", level: "Advanced" },
      { name: "Next.js", icon: "/next.svg", level: "Expert" },
      { name: "Prisma", icon: "/prisma.svg", level: "Expert" },
    ],
  },
  {
    category: "DevOps & Data",
    skills: [
      { name: "PostgreSQL", icon: "/postgres.svg", level: "Expert" },
      { name: "Docker", icon: "/dock.svg", level: "Advanced" },
      { name: "Google Cloud", icon: "/gcloud.svg", level: "Advanced" },
      { name: "CI/CD", icon: "/git.svg", level: "Advanced" },
      { name: "Linux", icon: "/linux.svg", level: "Expert" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "High-Concurrency AI Orchestrator",
    des: "Engineered a high-throughput distributed orchestration engine in Go, implementing worker pools and channel-based concurrency to safely manage parallel LLM API workloads.",
    img: "/p1.png", 
    iconLists: ["/go.svg", "/dock.svg", "/gcloud.svg", "/next.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai", 
  },
  {
    id: 2,
    title: "Distributed Media Streaming Platform",
    des: "Designed scalable media backend with Spring Boot and PostgreSQL, featuring stateless JWT authentication and optimized payload chunking for low-latency streaming.",
    img: "/NetflixClone.jpeg", 
    iconLists: ["/java.svg", "/sql.png", "/dock.svg", "/ts.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai", 
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "QF Network",
    thumbnail: "/qf_network.png",
    location: "Karachi, Pakistan",
    date: "Mar 2025 – Present",
    desc: [
      "Optimized p99 API latency by 40% by refactoring Prisma schema and implementing composite B-Tree indexing in PostgreSQL.",
      "Developed a semantic search engine using pgvector (HNSW indexing) for high-dimensional retrieval across 10,000+ SKU catalogs.",
      "Architected an LLM pipeline in Next.js, reducing merchant onboarding time by 95% (hours to 5 mins) via automated context and rate-limit management.",
      "Designed a distributed worker system using BullMQ and Redis, eliminating thread-blocking operations for asynchronous reward and webhook delivery.",
    ],
    className: "md:col-span-2",
  },
];

export const appliedML = [
  {
    id: 1,
    title: "Stanford RNA 3D Folding",
    rank: "Rank: 55/2,226 (Top 2.5%)",
    category: "Scientific ML",
    desc: "Engineered Transformer/CNN models with custom spatial embeddings; optimized GPU data pipelines for memory-constrained biological datasets.",
  },
  {
    id: 2,
    title: "Thermophysical Property Prediction",
    rank: "Rank: 62/1,176 (Top 5%)",
    category: "Chemical Informatics",
    desc: "Developed regression models using SMILES-derived graph descriptors to predict molecular melting points and improve convergence stability.",
  },
  {
    id: 3,
    title: "NVIDIA Nemotron Reasoning Challenge",
    rank: "Rank: 69/432 (Top 16%)",
    category: "LLM Fine-Tuning",
    desc: "Performed supervised fine-tuning (SFT) on foundational LLMs using reasoning datasets, improving multi-step logical consistency.",
  },
];

export const competitiveProgramming = [
  {
    id: 1,
    platform: "AtCoder",
    rank: "Cyan (1200), Rank 67th Global",
    desc: "Reached Cyan in a single debut match (Top 1% globally) in ABC 453.",
  },
  {
    id: 2,
    platform: "Codeforces",
    rank: "Specialist (Max 1477)",
    desc: "Regular Div.2 participant specializing in graph algorithms and dynamic programming.",
  },
  {
    id: 3,
    platform: "LeetCode",
    rank: "1000+ Solved (Top 5%)",
    desc: "Expertise in advanced data structures and optimization techniques.",
  },
  {
    id: 4,
    platform: "CodeChef",
    rank: "3-Star (1680 Rating)",
    desc: "Achieved +450 rating increase in a single contest, ranking 7th in Pakistan.",
  },
];

export const education = [
  {
    id: 1,
    institution: "Virtual University of Pakistan",
    degree: "Bachelor of Science in Computer Science (BSCS)",
    date: "Expected 2029",
    location: "Karachi, Pakistan",
    desc: "Currently pursuing Bachelor's degree with a focus on Computer Science fundamentals.",
    grade: "2nd Semester",
    coursework: [
      "Data Structures & Algorithms",
      "Discrete Math",
      "Systems Architecture",
      "Calculus",
      "Introduction to Programming",
      "Digital Logic Design",
      "Object Oriented Programming",
      "Statistics and Probability"
    ],
  },
];

const projectsCompleted = 10;

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
    link: "https://www.linkedin.com/in/awahab1567",
    icon: FaLinkedin,
  },
  {
    id: 3,
    link: "https://leetcode.com/u/abdulwahabyusufzai72/",
    icon: SiLeetcode,
  },
  {
    id: 4,
    link: "https://wa.me/+923428320022",
    icon: FaWhatsapp,
  },
  {
    id: 5,
    link: "https://www.kaggle.com/abdulwahabyusufzai",
    icon: SiKaggle,
  },
];
