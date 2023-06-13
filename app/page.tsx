import { Introduction } from "./components/Introduction";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { projectCards } from "./data/projects";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.main}>
      <Introduction />
      <section>
        <h2 className={s.title}>Work</h2>
        <div className={s.work}>
          {projectCards.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <Skills />
      <section>
        <h2 className={s.title}>Contact</h2>
      </section>
    </main>
  );
}
