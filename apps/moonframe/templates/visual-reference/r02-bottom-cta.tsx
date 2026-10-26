import styles from './r02-bottom-cta.module.css';

export type R02BottomCtaProps = {
  title: string;
  description?: string;
  href: string;
  action: string;
  /** Optional decorative brushwork supplied by the consumer. */
  paint?: React.ReactNode;
};

/** Editorial recruitment banner with a real link above optional decoration. */
export function R02BottomCta({
  title,
  description,
  href,
  action,
  paint,
}: R02BottomCtaProps) {
  return (
    <aside className={styles.banner}>
      {paint ? <div className={styles.paint} aria-hidden="true">{paint}</div> : null}
      <div className={styles.copy}>
        <h2 className={styles.title}>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
      <a className={styles.action} href={href}>{action}</a>
    </aside>
  );
}
