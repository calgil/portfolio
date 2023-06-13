import s from "../styles/components/Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { icons } from "../types/skills.types";

export const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className={s.skills}>
        {icons.map((skill) => (
          <div key={skill.name} className={s.skill}>
            <FontAwesomeIcon icon={skill.icon} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
