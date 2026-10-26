import styles from './r02-masthead.module.css';

export type R02MastheadProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional decorative layer supplied by the consuming page. */
  backdrop?: React.ReactNode;
  children?: React.ReactNode;
};

/** Layered editorial masthead that keeps its message selectable, real text. */
export function R02Masthead({
  eyebrow,
  title,
  description,
  backdrop,
  children,
}: R02MastheadProps) {
  return (
    <header className={styles.masthead}>
      {backdrop ? <div className={styles.backdrop} aria-hidden="true" inert>{backdrop}</div> : null}
      <div className={styles.content}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {description ? <p className={styles.description}>{description}</p> : null}
        {children ? <div className={styles.actions}>{children}</div> : null}
      </div>
    </header>
  );
}
