import Link from "next/link";
import s from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import { ProjectCardDetails } from "../types/projectCardDetails.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  project: ProjectCardDetails;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, imgPath, url, skills } = project;
  return (
    <div className={s.cardBody}>
      <div className={s.cardHeader}>
        <h6 className={s.projectTitle}>{title}</h6>
        <Link className={s.link} href={url}>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
        </Link>
      </div>
      <Image src={imgPath} alt="preview" width={372} height={166} />
      <div className={s.skillsUsed}>
        {skills.map((skill) => (
          <span className={s.skill} key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
