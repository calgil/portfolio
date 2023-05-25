import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.main}>
      <section className={s.intro}>
        <h1 className={s.title}>Hi, I&apos;m Calvin</h1>
        <p className={s.hook}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          deleniti aliquid debitis porro cupiditate saepe quo odio, doloribus
          corrupti ad at dolore ipsa vero. Molestias ipsam veniam incidunt
          laborum blanditiis animi optio pariatur non rem vitae! Eaque modi
          nobis aliquid animi et, atque ducimus in, eos blanditiis quaerat,
          voluptatibus quo?
        </p>
      </section>
    </main>
  );
}
