type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "link" | "primary";
};

import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  href,
  variant = "link",
}: ButtonProps) {
  const className = [
    styles.button,
    variant === "link" ? styles.link : "",
    variant === "primary" ? styles.primary : "",
  ].join(" ");
  if (href) {
    return (
      <a href={href} target="_blank" className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
