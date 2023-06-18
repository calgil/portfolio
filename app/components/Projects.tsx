import { projectCards } from "../data/projects";
import s from "../styles/components/Projects.module.scss";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={s.workContainer} id="work">
      <h2 className={s.title}>Projects</h2>
      <div className={s.work}>
        {projectCards.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
