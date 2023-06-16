import { projectCards } from "../data/projects";
import s from "../styles/components/Work.module.scss";
import { ProjectCard } from "./ProjectCard";

export const Work = () => {
  return (
    <section className={s.workContainer} id="work">
      <h2 className={s.title}>Work</h2>
      <div className={s.work}>
        {projectCards.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
