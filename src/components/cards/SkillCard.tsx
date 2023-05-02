import { Skill } from "../sections/SkillsSection";

// * TYPES
interface Props {
  skill: Skill;
}

// * COMPONENT: SkillCard
function SkillCard({ skill }: Props) {
  // @ Output
  return (
    <section>
      <h3 className="font-bold text-[32px] leading-10 tracking-[-1px]">
        {skill.title}
      </h3>

      <p className="text-[16px] text-light-gray leading-[26px]">
        {skill.experience}
      </p>
    </section>
  );
}

export default SkillCard;
