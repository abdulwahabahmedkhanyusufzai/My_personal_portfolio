import { projects } from "@/data";
import { MagicCard } from "./ui/Card";
import { GradualSpacing } from "./ui/GradualSpacing";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

function Projects() {
  return (
    <section id="projects">
      <div className="container my-10">
        <GradualSpacing text="Recent Projects" className="pt-14" />

        {/* Ensure projects exist before rendering */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-10 sm:mt-10">
            {projects.map((project) => (
              <MagicCard key={project.id} className="w-full h-full">
                <div className="flex flex-col w-full h-full hover:shadow-xl transition-shadow duration-500">
                  
                  {/* Fixed image height */}
                  <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={500} // Set a fixed width
                      height={300}

                      priority
                      
                      className="rounded w-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-5">
                    <h2 className="text-2xl font-bold truncate">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm text-white-100 line-clamp-4">
                      {project.des}
                    </p>

                    {/* Icons and Links */}
                    <div className="flex justify-between items-center gap-x-3 mt-5">
                      <div className="flex -space-x-1 overflow-hidden">
                        {project.iconLists?.map((icon, index) => (
                          <div
                            key={index}
                            className="border rounded-full bg-gradient-to-r from-[#04071D] to-[#0C0E23] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{ transform: `translateX(-${5 * index + 2}px)` }}
                          >
                            <img src={icon} alt="icon5" className="p-2" />
                          </div>
                        ))}
                      </div>

                      {/* Conditionally render Links only if they exist */}
                      <div className="flex items-center gap-4 text-white-100 text-xs sm:text-lg">
                        {project.link && (
                          <Link href={project.link} className="flex items-center gap-1 hover:text-purple">
                            GitHub <FaLocationArrow />
                          </Link>
                        )}
                        {project.link && (
                          <Link href={project.link} className="flex items-center gap-1 hover:text-purple">
                            Demo <FaLocationArrow />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-400 mt-5">
            No projects available at the moment.
          </p>
        )}

        {/* View All Projects Button */}
        <div className="flex items-center justify-center mt-5">
          <Link href="https://github.com/abdulwahabkhanyusufzai" target="_blank">
            <MagicButton title="View All Projects" icon={<FaLocationArrow />} position="right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
