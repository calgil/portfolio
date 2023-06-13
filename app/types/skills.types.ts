import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export const icons: SkillIconType[] = [
  { icon: faHtml5, name: "HTML" },
  { icon: faCss3, name: "CSS" },
  { icon: faJs, name: "JavaScript" },
  { icon: faReact, name: "React" },
  { icon: faNodeJs, name: "Node" },
  { icon: faSass, name: "Sass" },
  { icon: faGit, name: "Git" },
];

type SkillIconType = {
  icon: IconDefinition;
  name: string;
};
