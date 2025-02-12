import { z } from "zod";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: "/re.svg", level: "Advanced" },
      { name: "Next.js", icon: "/next.svg", level: "Advanced" },
      { name: "Tailwind CSS", icon: "/tail.svg", level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: "/js.svg", level: "Advanced" },
      { name: "TypeScript", icon: "/ts.svg", level: "Intermediate" },
      { name: "HTML5", icon: "/html5.svg", level: "Advanced" },
      { name: "CSS3", icon: "/css3.svg", level: "Advanced" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "/node-js.svg", level: "Advanced" },
      { name: "Express.js", icon: "/express.svg", level: "Advanced" },
      { name: "MongoDB", icon: "/mongodb.svg", level: "Advanced" },
      { name: "REST API", icon: "/restapi.svg", level: "Advanced" },
    ],
  },
  {
    category: "Development And Deployment Tools",skills: [
      { name: "Google Cloud", icon: "/gcloud.svg", level: "Intermediate" },
      { name: "Vercel", icon: "/vercel.svg", level: "Advanced" },
      { name: "Git & GitHub", icon: "/git.svg", level: "Advanced" },
      { name: "Postman", icon: "/postman.svg", level: "Advanced" },
        
    ],
  },
  {
    category: "Security & Authentication",
    skills: [
      { name: "JWT Authentication", icon: "json.svg", level: "Advanced" },
      { name: "OAuth2", icon: "/oauth.svg", level: "Intermediate" },
      { name: "Passport.js", icon: "/passport.svg", level: "Advanced" },
    ],
  },
  
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "/js.svg", level: "Advanced" },
      { name: "TypeScript", icon: "/ts.svg", level: "Intermediate" },
      { name: "C (Basics)", icon: "/c.svg", level: "Advanced" },
      { name: "Java (DSA)", icon: "/java.svg", level: "Learning" },
    ],
  },
];


export const projects = [
  {
    id: 1,
    title: "YouTube Clone",
    des: "Explore the YouTube Clone,a dynamic Web Application that offers YouTube fuctionality.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/express.svg","node-js.svg","gcloud.svg","passport.svg"],
    link: "https://youtube-clone-3fba.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix Clone ",
    des: "Netflix Clone is dynamic Video Streaming App which provide funcitonality of Netflix without Any Charges.",
    img: "/NetflixClone.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/express.svg","node-js.svg"],
    link: "https://mern-stack-netflix-apmo.vercel.app",
  },
  {
    id: 3,
    title: "Spotify Clone",
    des: "Spotify Clone Provide ypu Free Songs Listen anytime Anywhere",
    img: "/0.png",
    className: "object-cover w-full h-full",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/express.svg","node-js.svg"],
    link: "http://spotify-clone-3zxe.vercel.app/",
  },
  {
    id: 4,
    title: "Pizza Delivery Web",
    des: "A Pizza Delivery Web Having Simple Funcitonality to Order",
    img: "/pizza.png",
    className: "object-cover w-full h-full",
    iconLists: ["/html.svg", "/css3.svg", "/js.svg"],
    link: "https://full-pizza-responsive-web.vercel.app/",
  },
];



const yearsOfExperience = +1; // Example value
const projectsCompleted = +6; // Example value
const clients = 0; // Example value

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: projectsCompleted,
    text: "Project Completed",
  },
  {
    number: clients,
    text: "Clients",
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
