import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/ui/Navbar";
import RecentProjects from "@/components/RecentProjects";
import MySkills from "@/components/mySkills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        {/* Add your children components or elements here */}
        <Hero />
        <Grid />
        <Experience />
        <Achievements />
        <MySkills />
        <RecentProjects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
