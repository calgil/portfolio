import { Introduction } from "./components/Introduction";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { projectCards } from "./data/projects";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.main}>
      <Introduction />
      <section className={s.workContainer} id="work">
        <h2 className={s.title}>Work</h2>
        <div className={s.work}>
          {projectCards.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <Skills />
      <section id="contact" className={s.contactContainer}>
        <h2 className={s.title}>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a alias in
          sint omnis vitae voluptates, ipsum, beatae necessitatibus, illo atque
          ratione deleniti! Aliquid earum, aspernatur, atque esse ratione
          voluptatem facere nemo fugiat, laboriosam consequuntur reiciendis
          ipsa. Veniam, illum quidem accusantium harum sequi deserunt
          necessitatibus tempore? Quibusdam, quos nemo. Possimus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          dolor ullam, voluptatem ratione quod ipsa expedita harum eveniet
          dignissimos voluptates facilis veniam perferendis ab ad ea voluptatum
          sed optio culpa. Quaerat iure, voluptas similique veniam praesentium
          cumque ab ad possimus rem vero fuga itaque eius illum libero non. Cum,
          quam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          dolor ullam, voluptatem ratione quod ipsa expedita harum eveniet
          dignissimos voluptates facilis veniam perferendis ab ad ea voluptatum
          sed optio culpa. Quaerat iure, voluptas similique veniam praesentium
          cumque ab ad possimus rem vero fuga itaque eius illum libero non. Cum,
          quam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          dolor ullam, voluptatem ratione quod ipsa expedita harum eveniet
          dignissimos voluptates facilis veniam perferendis ab ad ea voluptatum
          sed optio culpa. Quaerat iure, voluptas similique veniam praesentium
          cumque ab ad possimus rem vero fuga itaque eius illum libero non. Cum,
          quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a alias in
          sint omnis vitae voluptates, ipsum, beatae necessitatibus, illo atque
          ratione deleniti! Aliquid earum, aspernatur, atque esse ratione
          voluptatem facere nemo fugiat, laboriosam consequuntur reiciendis
          ipsa. Veniam, illum quidem accusantium harum sequi deserunt
          necessitatibus tempore? Quibusdam, quos nemo. Possimus!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          dolor ullam, voluptatem ratione quod ipsa expedita harum eveniet
          dignissimos voluptates facilis veniam perferendis ab ad ea voluptatum
          sed optio culpa. Quaerat iure, voluptas similique veniam praesentium
          cumque ab ad possimus rem vero fuga itaque eius illum libero non. Cum,
          quam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          dolor ullam, voluptatem ratione quod ipsa expedita harum eveniet
          dignissimos voluptates facilis veniam perferendis ab ad ea voluptatum
          sed optio culpa. Quaerat iure, voluptas similique veniam praesentium
          cumque ab ad possimus rem vero fuga itaque eius illum libero non. Cum,
          quam.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          dolor ullam, voluptatem ratione quod ipsa expedita harum eveniet
          dignissimos voluptates facilis veniam perferendis ab ad ea voluptatum
          sed optio culpa. Quaerat iure, voluptas similique veniam praesentium
          cumque ab ad possimus rem vero fuga itaque eius illum libero non. Cum,
          quam.
        </p>
      </section>
    </main>
  );
}
