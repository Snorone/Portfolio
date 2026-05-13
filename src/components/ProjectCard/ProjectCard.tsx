import Button from "../button/Button";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  expanded: boolean;
  onToggle: () => void;
  extraDescription?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  github,
  expanded,
  onToggle,
  extraDescription,
}: ProjectCardProps) {
  return (
    <div
      className={`${styles.card} ${expanded ? styles.open : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={`${styles.more} ${expanded ? styles.show : ""}`}>
        <p className={styles.extra}>{extraDescription}</p>
      </div>

      <div className={styles.techList}>
        {tech.map((item) => (
          <span key={item} className={styles.tech}>
            {item}
          </span>
        ))}
      </div>
      {/* <Button href={link} variant="primary">
        Go to project →
      </Button> */}
      <div className={styles.actions}>
        {link && (
          <Button href={link} variant="primary">
            Live demo →
          </Button>
        )}

        {github && (
          <Button href={github} variant="primary">
            GitHub code →
          </Button>
        )}
      </div>
      <button className={styles.toggle} onClick={onToggle}>
        {expanded ? "Show less ↑" : "Read more ↓"}
      </button>
    </div>
  );
}
