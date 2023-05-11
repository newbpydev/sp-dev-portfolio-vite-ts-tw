import { Project } from "../sections/ProjectsSection";
import Button from "../ui/buttons/Button";

// * TYPES
interface Props {
  project: Project;
}

// * COMPONENT: ProjectCard
function ProjectCard({ project }: Props) {
  const tags = project.tags.map((tag) => (
    <span className="uppercase text-light-gray" key={tag}>
      {tag}
    </span>
  ));

  // @ Output
  return (
    <article>
      <div className="mb-5">
        <picture>
          <source
            media="(min-width: 33.75em)"
            srcSet={`/images/${project.src[1].large}`}
          />
          <img src={`/images/${project.src[0].small}`} alt={project.title} />
        </picture>
      </div>

      <h3 className="text-md uppercase font-bold mb-[7px]">{project.title}</h3>

      <div className="flex space-x-[18px] mb-5">{tags && tags}</div>

      <div className="flex space-x-[30px]">
        <Button type="link" href={project.livePage}>
          View Project
        </Button>
        <Button type="link" href={project.codePage}>
          View Code
        </Button>
      </div>
    </article>
  );
}

export default ProjectCard;
