import Button from "../button/button";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.techList}>
        {tech.map((item) => (
          <span key={item} className={styles.tech}>
            {item}
          </span>
        ))}
      </div>
      <Button href={link} variant="link">
        Se projekt →
      </Button>
    </div>
  );
}
