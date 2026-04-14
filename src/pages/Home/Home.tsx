import styles from "./Home.module.css";
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1>
          Hej, jag är <span>Frontendutvecklare</span>
        </h1>

        <p>Jag bygger moderna webbapplikationer med React och TypeScript.</p>

        <div className={styles.buttons}>
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Mina projekt
          </Button>

          <a href="mailto:dinmail@gmail.com">Kontakta mig</a>
        </div>
      </div>
    </section>
  );
}
