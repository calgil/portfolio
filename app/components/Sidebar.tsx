import Image from "next/image";
import s from "../styles/components/Sidebar.module.scss";
import Link from "next/link";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

let cx = classNames.bind(s);

export const SideBar = () => {
  return (
    <div className={s.sideBar}>
      <div className={s.content}>
        <div className={s.logo}>
          <Image src="/logo.webp" alt="logo" width={78} height={118} />
        </div>

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
          <li className={cx("link", "no-line")}>
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </li>
          <li className={cx("link", "no-line")}>
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </li>
        </ul>
        <div className={s.line}></div>
      </div>
    </div>
  );
};
