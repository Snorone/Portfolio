import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <h2>Om mig</h2>

      <p>
        Jag är en frontendutvecklare som gillar att bygga användarvänliga och
        responsiva webbapplikationer.
      </p>

      <p>
        Jag har erfarenhet av React, TypeScript och att arbeta med API:er. Just
        nu söker jag en roll där jag kan fortsätta utvecklas som utvecklare.
      </p>

      <div className={styles.skills}>
        <span>React</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>Git</span>
      </div>
    </section>
  );
}
