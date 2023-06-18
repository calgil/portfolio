"use client";
import Image from "next/image";
import s from "../styles/components/Sidebar.module.scss";
import Link from "next/link";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

let cx = classNames.bind(s);

export const SideBar = () => {
  const activeSection = useIntersectionObserver();

  return (
    <div className={s.sideBar}>
      <nav className={s.content}>
        <div className={s.logo}>
          <Link href="/">
            <Image src="/logo.webp" alt="logo" width={78} height={118} />
          </Link>
        </div>

        <ul className={s.links}>
          <li className={cx(s.navLink, { active: activeSection === "about" })}>
            <Link href="#about" className={s.link}>
              <span className={s.number}>0.1</span> About
            </Link>
          </li>
          <li className={cx(s.navLink, { active: activeSection === "work" })}>
            <Link className={s.link} href="#work">
              <span className={s.number}>0.2</span> Projects
            </Link>
          </li>
          <li className={cx(s.navLink, { active: activeSection === "skills" })}>
            <Link className={s.link} href="#skills">
              <span className={s.number}>0.3</span> Skills
            </Link>
          </li>
          <li
            className={cx(s.navLink, { active: activeSection === "contact" })}
          >
            <Link className={s.link} href="#contact">
              <span className={s.number}>0.4</span> Contact
            </Link>
          </li>
          <li className={cx("navLink", "no-line")}>
            <Link
              className={s.link}
              href="https://www.linkedin.com/in/calvin-gilbert-developer/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </Link>
          </li>
          <li className={cx("navLink", "no-line")}>
            <Link className={s.link} href="https://github.com/calgil">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </Link>
          </li>
        </ul>
        <div className={s.line}></div>
      </nav>
    </div>
  );
};
