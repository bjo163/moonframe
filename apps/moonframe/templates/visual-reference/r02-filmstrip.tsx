import styles from './r02-filmstrip.module.css';

export type R02FilmstripEntry = {
  id: string;
  title: string;
  time: string;
  dateTime?: string;
  description?: string;
  href?: string;
};

export type R02FilmstripProps = {
  entries: R02FilmstripEntry[];
  label?: string;
};

/** Accessible editorial timeline; text remains available without horizontal scrolling. */
export function R02Filmstrip({ entries, label = 'Article timeline' }: R02FilmstripProps) {
  if (entries.length === 0) return null;

  return (
    <section className={styles.section} aria-label={label}>
      <ol className={styles.timeline} tabIndex={0}>
        {entries.map(({ id, title, time, dateTime, description, href }) => (
          <li className={styles.entry} key={id}>
            <time className={styles.time} dateTime={dateTime}>{time}</time>
            <div className={styles.copy}>
              <h2 className={styles.title}>
                {href ? <a href={href}>{title}</a> : title}
              </h2>
              {description ? <p className={styles.description}>{description}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
