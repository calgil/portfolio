import s from "../styles/components/Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../data/skills";

export const Skills = () => {
  return (
    <section className={s.skillsContainer} id="skills">
      <h2 className={s.title}>Skills</h2>
      <div className={s.skills}>
        {icons.map((skill) => (
          <div key={skill.name} className={s.skill}>
            <FontAwesomeIcon icon={skill.icon} size="2xl" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
