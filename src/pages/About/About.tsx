import { useState } from "react";
import styles from "./About.module.css";
import Button from "../../components/button/Button";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="About" className={styles.container}>
      <h2>About me</h2>

      <div className={styles.card}>
        <p>
          Hi! My name is Tobias Hurtig and I’m a frontend developer specializing
          in React and TypeScript. I recently completed my studies as a frontend
          developer
        </p>

        <div className={`${styles.more} ${expanded ? styles.open : ""}`}>
          <p>
            I’ve worked on both personal projects and during my internship at
            IKEA, where I helped develop an internal platform for visualizing
            statistics. Currently, I’m building an application for a personal
            trainer, working with both frontend and backend.
          </p>

          <p>
            Previously, I worked as a teacher for over 10 years, which has given
            me strong skills in communication, collaboration, and
            problem-solving.
          </p>

          <p>
            I’m curious, driven, and currently looking for an opportunity where
            I can continue to grow as a developer and contribute to meaningful
            projects.
          </p>
          <div className={styles.img}>
            <img
              src="../src/assets/tobbehalv.jpg"
              alt="Tobias Hurtig"
              className={styles.profileImage}
            />
          </div>
          {/* <p>
          Hej! Jag heter Tobias Hurtig och är frontendutvecklare med fokus på
          React och TypeScript. Jag har nyligen avslutat min utbildning på Grit
          Academy.
        </p>
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
          </p> */}
        </div>

        {/* 👇 Button */}
        <Button variant="primary" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less ↑" : "Read more ↓"}
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
