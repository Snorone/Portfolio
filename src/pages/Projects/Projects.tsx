import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { useInView } from "../../hooks/useInView";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Fortnite Stats Comparison",
    description:
      "Compare your Fortnite statistics with a friend's by fetching data from the Fortnite Tracker API. This was one of my first real projects while studying.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://fortfight-9c1af.firebaseapp.com/",
    github: "https://github.com/Snorone/fortfight",
  },
  {
    title: "ShariFit",
    description:
      "A fitness application that helps users track workouts and monitor their progress over time.",
    tech: ["React", "Google Firebase", "CSS"],
    link: "https://sharifit-9fdd1.web.app/",
    github: "https://github.com/Snorone/ShariFit",
  },
  {
    title: "Dart Practice App",
    description:
      "A simple application featuring different exercises to improve dart skills. (under construction)",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://snorone.github.io/dart/",
    github: "https://github.com/Snorone/dart",
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView();

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>My Projects</h2>

      <div
        ref={ref}
        className={`${styles.grid} ${isVisible ? styles.show : styles.hidden}`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
