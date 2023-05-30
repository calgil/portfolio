import { ProjectCard } from "./components/ProjectCard";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.main}>
      <section className={s.intro}>
        <h1 className={s.title}>Hi, I&apos;m Calvin</h1>
        <p className={s.hook}>
          A product focused fullstack developer looking forward to bringing your
          ideas to the web.
        </p>
      </section>
      <section>
        <h2 className={s.title}>Work</h2>
        <div className={s.work}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section>
        <h2 className={s.title}>Skills</h2>
      </section>
      <section>
        <h2 className={s.title}>Contact</h2>
      </section>
    </main>
  );
}
