import { z } from "zod";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "/python.svg", level: "Advanced" }, // Placeholder icon if missing
      { name: "C++ (DSA)", icon: "/c.svg", level: "Advanced" },
      { name: "JavaScript", icon: "/js.svg", level: "Advanced" },
      { name: "TypeScript", icon: "/ts.svg", level: "Advanced" },
      { name: "SQL", icon: "/sql.png", level: "Intermediate" }, // Placeholder
      { name: "GraphQL", icon: "/graphql.png", level: "Intermediate" }, // Placeholder
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Machine Learning", icon: "/machine-learning-model.svg", level: "Advanced" }, // Placeholder
      { name: "Computer Vision", icon: "/cv.png", level: "Advanced" }, // Placeholder
      { name: "Reinforcement Learning", icon: "/rf.png", level: "Advanced" }, // Placeholder
      { name: "JAX", icon: "/jax.png", level: "Advanced" }, // Placeholder
      { name: "Scikit-learn", icon: "/sk-learn.png", level: "Advanced" }, // Placeholder
      { name: "NumPy", icon: "/np.png", level: "Advanced" }, // Placeholder
      { name: "Pandas", icon: "/pd.png", level: "Advanced" }, // Placeholder
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React.js", icon: "/re.svg", level: "Advanced" },
      { name: "Next.js", icon: "/next.svg", level: "Advanced" },
      { name: "Node.js", icon: "/node-js.svg", level: "Advanced" },
      { name: "Express", icon: "/express.svg", level: "Advanced" },
      { name: "MongoDB", icon: "/mongodb.svg", level: "Advanced" },
      { name: "Prisma", icon: "/prisma.svg", level: "Intermediate" }, // Placeholder
      { name: "Remix", icon: "/remix.webp", level: "Intermediate" }, // Placeholder
      { name: "Shopify", icon: "/shopify.png", level: "Intermediate" }, // Placeholder
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "Google Cloud", icon: "/gcloud.svg", level: "Intermediate" },
      { name: "Docker", icon: "/dock.svg", level: "Intermediate" },
      { name: "Linux (WSL)", icon: "/linux.svg", level: "Advanced" }, // Placeholder
      { name: "Git", icon: "/git.svg", level: "Advanced" },
      { name: "Postman", icon: "/postman.svg", level: "Advanced" },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Scalable Video Content Platform",
    des: "Engineered a video-sharing platform with JWT/Google OAuth, processing 5,000+ minutes of content. Optimized playback performance by 40% using lazy loading and ensured 99.9% uptime via Vercel.",
    img: "/p1.png", // Reusing existing image as placeholder
    iconLists: ["/re.svg", "/node-js.svg", "/gcloud.svg", "/vercel.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai", // Fallback link
  },
  {
    id: 2,
    title: "High-Performance Streaming Interface",
    des: "Designed a Netflix-inspired UI with real-time content fetching and advanced filtering mechanisms. Built with MERN Stack and REST APIs.",
    img: "/NetflixClone.jpeg", // Reusing existing image as placeholder
    iconLists: ["/re.svg", "/tail.svg", "/node-js.svg", "/mongodb.svg"],
    link: "https://github.com/abdulwahabahmedkhanyusufzai", // Fallback link
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer",
    company: "QF Network",
    thumbnail: "/qf_network.png",
    location: "Karachi, Pakistan",
    date: "Mar 2025 – Present",
    desc: [
      "Engineered custom Shopify applications using Remix.js and Prisma ORM, automating billing workflows and webhook handling.",
      "Refactored legacy React codebases, implementing memoization and lazy loading to reduce FCP by 30%.",
      "Deployed scalable REST APIs using Node.js and Express, integrating third-party services via robust authentication flows.",
      "Maintained 99.9% uptime for client applications, debugging critical production issues within strict SLAs.",
    ],
    className: "md:col-span-2",
  },
];

export const openSourceAchievements = [
  {
    id: 1,
    project: "Google / JAX",
    role: "High-Performance Numerical Computing",
    icon: "/jax.png",
    date: "Jan 2026 – Present",
    desc: [
      "Refactored rankdata functions to implement high-performance lazy execution using lax.cond, eliminating redundant sorting overhead (PR #34628).",
      "Core Team Review: Optimization approved by Google Research engineers for the v0.10.0 release.",
    ],
  },
  {
    id: 2,
    project: "Google / Colab-VSCode Extension",
    role: "TypeScript, Jupyter Protocol",
    icon: "/ts.svg",
    date: "Jan 2026 – Present",
    desc: [
      "Overhauled Authentication UX by intercepting kernel-level input request messages and replacing static URLs with custom VS Code UI (PR #375).",
      "Resolved login blockers for Brave/Safari users by implementing a custom input reply handler that identifies client processes via Session IDs.",
    ],
  },
  {
    id: 3,
    project: "Google / Colabtools",
    role: "Core Library",
    icon: "/gcloud.svg",
    date: "Jan 2026 – Present",
    desc: [
      "Improved developer experience by implementing actionable error messages for Drive mount credential failures (PR #5805).",
      "Refined exception handling logic within core Colab utilities used by millions of monthly active users.",
    ],
  },
  {
    id: 4,
    project: "Google / Tunix",
    role: "Reinforcement Learning Library",
    icon: "/rf.png",
    date: "Jan 2026 – Present",
    desc: [
      "Diagnosed and resolved a critical AttributeError in the rl cluster module affecting Python 3.11+ environments (PR #1000).",
      "Consolidated multiple stale pull requests into a single optimized patch.",
    ],
  },
];

export const dataScienceCompetitions = [
  {
    id: 1,
    title: "CSIRO – Image2Biomass Prediction",
    rank: "Top 17% (671/3906) Global",
    desc: "Developed a Deep Learning pipeline to estimate biomass from multi-spectral imagery. Applied using Regression-based CNNs.",
  },
  {
    id: 2,
    title: "PhysioNet ECG Digitization",
    rank: "Top 21% (299/1428) Global",
    desc: "Developed a computer vision pipeline to extract ECG time-series data from scans. Implemented signal extraction algorithms.",
  },
  {
    id: 3,
    title: "Diabetes Prediction Challenge",
    rank: "Top 40% (1677/4206) Global",
    desc: "Built ensemble learning models for medical classification, competing against 4,000+ international teams.",
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
    grade: "1st Semester",
    coursework: [
      "Introduction to Computing",
      "English Comprehension",
      "General Mathematics",
      "Calculus & Analytical Geometry",
      "Discrete Mathematics",
      "Physics",
      "Introduction to E-Learning",
      "Pakistan Studies"
    ],
  },
];

const yearsOfExperience = 1;

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: 4,
    text: "Projects at QF Network",
  },
  {
    number: 6,
    text: "Personal Projects",
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
    link: "www.linkedin.com/in/awahab1567",
    icon: FaLinkedin,
  },
  {
    id: 3,
    link: "https://www.facebook.com/abdulwahabkhan",
    icon: FaFacebook,
  },
  {
    id: 4,
    link: "https://wa.me/+923428320022",
    icon: FaWhatsapp,
  },
  {
    id: 5,
    link: "https://fiverr.com/wahabyusufzai",
    icon: SiFiverr,
  },
];
