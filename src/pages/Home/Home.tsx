import styles from "./Home.module.css";
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <section id="Home" className={styles.container}>
      <div className={styles.content}>
        <h1>
          Hi, I´m <strong>Tobias Hurtig</strong> <br />
          <span>Frontend developer</span>
        </h1>

        <p className={styles.lead}>
          I build web applications using React and TypeScript.
        </p>

        <p className={styles.subtext}>
          With 2 years of experience in development and over 10 years in
          education, I bring strong communication skills and a user-focused
          mindset into development.
        </p>

        <div className={styles.buttons}>
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            My projects
          </Button>

          <Button variant="primary" href="mailto:tobias.o.hurtig@gmail.com">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}

// import styles from "./Home.module.css";
// import Button from "../../components/button/Button";

// export default function Home() {
//   return (
//     <section id="home" className={styles.container}>
//       <div className={styles.content}>
//         <h1>
//           Från lärare till <span>frontendutvecklare</span>
//         </h1>

//         <p className={styles.lead}>
//           Jag heter Tobias och bygger moderna webbapplikationer med React och
//           TypeScript.
//         </p>

//         <p className={styles.subtext}>
//           Med över 10 års erfarenhet av pedagogik kombinerar jag teknik med
//           tydlig kommunikation och användarvänliga lösningar.
//         </p>

//         <div className={styles.buttons}>
//           <Button
//             variant={"primary"}
//             onClick={() =>
//               document
//                 .getElementById("projects")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             Se mina projekt →
//           </Button>

//           <Button variant={"primary"} href="mailto:dinmail@gmail.com">
//             Kontakta mig
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
