import s from "../styles/components/Introduction.module.scss";

export const Introduction = () => {
  return (
    <section className={s.intro}>
      <h1 className={s.title}>Hi, I&apos;m Calvin</h1>
      <div className={s.hook}>
        <p className={s.text}>
          As a versatile full stack developer, I bring a wealth of expertise in
          both front-end and back-end technologies to create seamless and
          captivating web experiences.
        </p>
        <p className={s.text}>
          With a strong foundation in JavaScript, React, Next, I am adept at
          building responsive interfaces, and optimizing performance.
        </p>
        <p className={s.text}>
          I invite you to explore my diverse skill set, elegant user interfaces,
          and dedication to delivering high-quality solutions that align with
          clients&apos; goals
        </p>
      </div>
    </section>
  );
};
