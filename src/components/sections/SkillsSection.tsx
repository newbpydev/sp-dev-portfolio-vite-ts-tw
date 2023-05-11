import { useEffect, useState } from "react";
import SkillCard from "../cards/SkillCard";

// * TYPES
export interface Skill {
  title: string;
  experience: string;
}

// interface Props {}

// * COMPONENT: SkillsSection
function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>();

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const renderSkills = skills?.map((skill) => (
    <SkillCard key={skill.title} skill={skill} />
  ));

  // @ Output
  return (
    <section className="relative px-4 md:px-[30px] mx-auto mb-20 md:mb-[100px] skills-bg-image">
      <div className="grid justify-center space-y-6 text-center border-y-[1px] w-full py-10 md:border-t-[1px] md:border-b-0 md:grid-cols-2 md:text-left md:space-y-0 md:gap-y-[52px] md:pt-[52px] md:pb-0">
        {renderSkills && renderSkills}
      </div>
    </section>
  );
}

export default SkillsSection;
