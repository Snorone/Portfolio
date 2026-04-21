import styles from "./ContactModal.module.css";
import { useEffect, useState } from "react";
import Button from "../button/Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal = ({ isOpen, onClose }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // vänta på animation innan unmount
      const timeout = setTimeout(() => setIsVisible(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : styles.close}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${isOpen ? styles.open : styles.close}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.title}>Let’s connect</h2>

        <div className={styles.links}>
          <Button variant="primary" href="mailto:tobias.o.hurtig@gmail.com">
            Email
          </Button>

          <Button
            variant="primary"
            href="https://www.linkedin.com/in/tobias-hurtig-291a9b28b/"
          >
            LinkedIn
          </Button>

          <Button variant="primary" href="https://github.com/Snorone">
            GitHub
          </Button>
        </div>

        <Button variant="link" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};
