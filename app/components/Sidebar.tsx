import Image from "next/image";
import s from "../styles/components/Sidebar.module.scss";
import Link from "next/link";

export const SideBar = () => {
  return (
    <div className={s.sideBar}>
      <div className={s.content}>
        <div className={s.photo}></div>
        <ul className={s.links}>
          <li className={s.link}>
            <span className={s.number}>0.1</span> About
          </li>
          <li className={s.link}>
            <span className={s.number}>0.2</span> Skills
          </li>
          <li className={s.link}>
            <span className={s.number}>0.3</span> Work
          </li>
          <li className={s.link}>
            <span className={s.number}>0.4</span> Contact
          </li>
          <li className={s.link}>
            <Link href="https://www.linkedin.com/in/calvin-gilbert-developer/">
              <Image src="/li.webp" alt="li" width={21} height={21} />
            </Link>
          </li>
          <li className={s.link}>
            <Link href="https://github.com/calgil">
              <Image src="/github.webp" alt="git hub" width={21} height={21} />
            </Link>
          </li>
        </ul>
        <div className={s.line}></div>
      </div>
    </div>
  );
};
