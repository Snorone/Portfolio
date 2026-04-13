import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { useInView } from "../../hooks/useInView";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Fortnite stats comparison",
    description:
      "Jämför dina Fortnite-statistik med en väns genom att hämta data från Fortnite Tracker API.",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://fortfight-9c1af.firebaseapp.com/",
  },
  {
    title: "Weather App",
    description: "Hämtar väderdata från ett API och visar aktuell temperatur.",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "Portfolio (denna sida)",
    description: "Min egen portfolio byggd med React och TypeScript.",
    tech: ["React", "TypeScript", "Vite"],
  },
  {
    title: "Dart practice app",
    description: "En enkel app med olika övningar för dart.",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://dart-practice-app.vercel.app/",
  },
];

export default function Projects() {
  const { ref, isVisible } = useInView();

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Mina Projekt</h2>

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
          />
        ))}
      </div>
    </section>
  );
}
