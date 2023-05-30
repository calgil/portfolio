import Link from "next/link";
import s from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className={s.cardBody}>
      <div className={s.cardHeader}>
        <h6 className={s.projectTitle}>Project Title</h6>
        <Link className={s.link} href="#">
          <Image src="/link.webp" alt="link" width={25} height={25} />
        </Link>
      </div>
      <Image src="/Rectangle3.png" alt="preview" width={372} height={166} />
      <div className={s.skillsUsed}>
        <span className={s.skill}>React</span>
        <span className={s.skill}>Node</span>
        <span className={s.skill}>SCSS</span>
      </div>
    </div>
  );
};
