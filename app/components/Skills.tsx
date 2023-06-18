import s from "../styles/components/Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillIcons, skillImages } from "../data/skills";
import Image from "next/image";

export const Skills = () => {
  return (
    <section className={s.skillsContainer} id="skills">
      <h2 className={s.title}>Skills</h2>
      <div className={s.skills}>
        {skillIcons.map((skill) => (
          <div key={skill.name} className={s.skill}>
            {skill.icon && <FontAwesomeIcon icon={skill.icon} size="3x" />}
            <p>{skill.name}</p>
          </div>
        ))}
        {skillImages.map((skill) => (
          <div key={skill.name} className={s.skill}>
            <Image src={skill.imgSrc} alt={skill.name} width={42} height={42} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
