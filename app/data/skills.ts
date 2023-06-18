import {
  faHtml5,
  faCss3,
  faSass,
  faSquareJs,
  faReact,
  faNode,
  faGitAlt,
  faGoogle,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SkillIconType, SkillImageType } from "../types/skills.types";

export const skillIcons: SkillIconType[] = [
  {
    name: "JavaScript",
    icon: faSquareJs,
  },

  {
    name: "React",
    icon: faReact,
  },
  {
    name: "Node",
    icon: faNode,
  },
  {
    name: "Sass",
    icon: faSass,
  },
  {
    name: "HTML",
    icon: faHtml5,
  },
  {
    name: "CSS",
    icon: faCss3,
  },
  {
    name: "Git",
    icon: faGitAlt,
  },
  { name: "Firebase", icon: faGoogle },
  { name: "MongoDB", icon: faDatabase },
  { name: "Amazon S3", icon: faAws },
];

export const skillImages: SkillImageType[] = [
  { name: "TypeScript", imgSrc: "/ts.png" },
  { name: "Next", imgSrc: "/next1.png" },
];
