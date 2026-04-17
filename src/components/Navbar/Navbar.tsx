import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Logo.png";

const sections = ["Home", "Projects", "About"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="TH logo"
        className={styles.logo}
        onClick={() =>
          document
            .getElementById("Home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div
        className={`${styles.hamburger} ${
          menuOpen ? styles.activeHamburger : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => scrollToSection(section)}
            className={active === section ? styles.active : ""}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}
