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
    <section className="px-4 mx-auto mb-20">
      <div className="grid justify-center space-y-6 text-center border-y-[1px] w-full py-10">
        {renderSkills && renderSkills}
      </div>
    </section>
  );
}

export default SkillsSection;
