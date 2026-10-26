import type { ReactNode } from 'react';
import styles from './r02-story-card.module.css';

export type R02StoryCardProps = {
  title: string;
  caption: string;
  href: string;
  media: ReactNode;
  actionLabel?: string;
};

/** Image led editorial card whose caption and action remain visible without hover. */
export function R02StoryCard({ title, caption, href, media, actionLabel = 'Read story' }: R02StoryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media} aria-hidden="true">{media}</div>
      <div className={styles.caption}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>{caption}</p>
        <a className={styles.action} href={href} aria-label={`${actionLabel}: ${title}`}>
          {actionLabel}<span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  );
}
