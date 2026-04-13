type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

import styles from "./ProjectCard.module.css";

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
      <div className={styles.links}>
        {link && (
          <a href={link} target="_blank" className={styles.link}>
            Se projekt →
          </a>
        )}
      </div>
    </div>
  );
}
