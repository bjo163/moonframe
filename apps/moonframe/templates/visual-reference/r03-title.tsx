import styles from './r03-title.module.css';

export type R03TitleProps = {
  /** Visible title text. Keep event names as live DOM text, not artwork. */
  children: React.ReactNode;
  eyebrow?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
};

/** Expressive poster title hierarchy with semantic, selectable text. */
export function R03Title({ children, eyebrow, as: Heading = 'h1' }: R03TitleProps) {
  return (
    <header className={styles.titleBlock}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading className={styles.title}>{children}</Heading>
    </header>
  );
}
