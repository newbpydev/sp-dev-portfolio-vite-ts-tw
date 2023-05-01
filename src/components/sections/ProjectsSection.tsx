import ProjectCard from "../cards/ProjectCard";

// * TYPES
interface Props {}

// * COMPONENT: ProjectsSection
function ProjectsSection({}: Props) {
  // @ Output
  return (
    <section>
      ProjectsSection <ProjectCard />
    </section>
  );
}

export default ProjectsSection;
