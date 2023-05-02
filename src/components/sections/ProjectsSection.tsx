import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import Button from "../ui/buttons/Button";

// * TYPES

export interface Project {
  title: string;
  src: [{ small: string }, { large: string }];
  tags: string[];
  slug: string;
  livePage: string;
  codePage: string;
}

// * COMPONENT: ProjectsSection
function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  const renderProjects = projects?.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ));

  // @ Output
  return (
    <section className="section-container">
      <div className="flex justify-between">
        <h2 className="text-h1">Projects</h2>
        <Button type="link" href="#contact">
          Contact Me
        </Button>
      </div>

      <div className="grid space-y-10 mt-10">
        {renderProjects && renderProjects}
      </div>
    </section>
  );
}

export default ProjectsSection;
