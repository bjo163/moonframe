import type { ReactNode } from 'react';
import styles from './r02-story-grid.module.css';

export type R02StoryTile = {
  id: string;
  title: string;
  summary?: string;
  href?: string;
  media?: ReactNode;
  featured?: boolean;
};

export type R02StoryGridProps = {
  stories: R02StoryTile[];
  label?: string;
};

/** Editorial story layout with live DOM copy and a deliberately uneven rhythm. */
export function R02StoryGrid({ stories, label = 'Featured stories' }: R02StoryGridProps) {
  if (stories.length === 0) return null;

  return (
    <section className={styles.section} aria-label={label}>
      <div className={styles.grid}>
        {stories.map(({ id, title, summary, href, media, featured }) => (
          <article className={`${styles.tile} ${featured ? styles.featured : ''}`} key={id}>
            {media ? <div className={styles.media} aria-hidden="true">{media}</div> : null}
            <div className={styles.copy}>
              <h2 className={styles.title}>
                {href ? <a className={styles.link} href={href}>{title}</a> : title}
              </h2>
              {summary ? <p className={styles.summary}>{summary}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
