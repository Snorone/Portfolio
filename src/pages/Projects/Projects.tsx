import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  extraDescription?: string;
};

const projects: Project[] = [
  {
    title: "Fortnite Stats Comparison",
    description:
      "This project allows users to compare their Fortnite statistics with a friend's by fetching real-time data from the Fortnite Tracker API. It focuses on visualizing player performance in a clear and engaging way.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://fortfight-9c1af.firebaseapp.com/",
    github: "https://github.com/Snorone/fortfight",
    extraDescription:
      "This was one of my first projects working with an external API, where I learned how to handle asynchronous data fetching and manage application state in React. I implemented features for searching players and displaying their statistics side by side, which required careful handling of loading states and error cases. The project gave me a strong foundation in working with APIs and structuring React applications.",
  },
  {
    title: "ShariFit",
    description:
      "This project is a fitness application designed to help users track workouts and monitor their progress over time, with a focus on simplicity and usability.",
    tech: ["React", "Google Firebase", "CSS"],
    link: "https://sharifit-9fdd1.web.app/",
    github: "https://github.com/Snorone/ShariFit",
    extraDescription:
      "In this project, I worked with Firebase to implement user authentication and persistent data storage. Users can log workouts and track their progress over time, which required structuring data efficiently and handling user-specific content. This project helped me understand how to build full-stack-like functionality using Firebase, including managing user sessions and ensuring a smooth user experience.",
  },
  {
    title: "Dart Practice App",
    description:
      "This project is a practice application aimed at helping users improve their dart skills through structured exercises and interactive challenges.",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://snorone.github.io/dart/",
    github: "https://github.com/Snorone/dart",
    extraDescription:
      "This project is currently under development and focuses on creating interactive training exercises for darts. I'm working on building dynamic features and improving the overall user experience, while also refining my skills in TypeScript and component design. The goal is to create a structured and engaging way for users to practice and track their improvement over time.",
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="Projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

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
            extraDescription={project.extraDescription}
            expanded={active === project.title}
            onToggle={() =>
              setActive(active === project.title ? null : project.title)
            }
          />
        ))}
      </div>
    </section>
  );
}
