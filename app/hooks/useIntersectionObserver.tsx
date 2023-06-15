import { useEffect, useState } from "react";

const useIntersectionObserver = () => {
  const [activeSection, setActiveSection] = useState<string | null>("about");

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          const id = section.getAttribute("id");
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};

export default useIntersectionObserver;
