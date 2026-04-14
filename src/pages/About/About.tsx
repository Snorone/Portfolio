import { useState } from "react";
import styles from "./About.module.css";
import Button from "../../components/button/Button";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="about" className={styles.container}>
      <h2>Om mig</h2>

      <div className={styles.card}>
        <p>
          Hej! Jag heter Tobias Hurtig och är frontendutvecklare med fokus på
          React och TypeScript. Jag har nyligen avslutat min utbildning på Grit
          Academy.
        </p>

        {/*  Expandable content */}
        <div className={`${styles.more} ${expanded ? styles.open : ""}`}>
          <p>
            Jag har arbetat med både egna projekt och praktik på IKEA där jag
            utvecklade en intern plattform för statistik. Just nu bygger jag en
            app åt en personlig tränare där jag jobbar med både frontend och
            backend.
          </p>

          <p>
            Tidigare har jag arbetat som lärare i över 10 år, vilket har gett
            mig starka färdigheter inom kommunikation och samarbete.
          </p>

          <p>
            Jag är nyfiken, driven och söker nu en roll där jag kan fortsätta
            utvecklas som utvecklare.
          </p>
        </div>

        {/* 👇 Button */}
        <Button variant="primary" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Visa mindre ↑" : "Läs mer ↓"}
        </Button>
      </div>
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
