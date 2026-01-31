import { GradualSpacing } from "./ui/GradualSpacing";
import { HoverEffect } from "./ui/HoverEffect";
import { skillsData } from "@/data";

const mySkills = () => {
  return (
    <div className="py-20 w-full" id="skills">
      <GradualSpacing text="My Skills" />
      <div className="max-w-7xl mx-auto px-8">
        {skillsData.map((category, idx) => (
          <div key={category.category + idx} className="mt-10">
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">
              {category.category}
            </h3>
            <HoverEffect items={category.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default mySkills;
