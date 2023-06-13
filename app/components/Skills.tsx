import s from "../styles/components/Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../data/skills";

export const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
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
