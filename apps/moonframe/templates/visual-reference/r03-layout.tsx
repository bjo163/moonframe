import type { ReactNode } from 'react';
import styles from './r03-layout.module.css';

export type R03LayoutProps = {
  title: ReactNode;
  artwork: ReactNode;
  body?: ReactNode;
  tags?: ReactNode;
  callToAction?: ReactNode;
};

/** Poster reading order stays aligned with the DOM: title, art, details, action. */
export function R03Layout({ title, artwork, body, tags, callToAction }: R03LayoutProps) {
  return (
    <article className={styles.poster}>
      <header className={styles.title}>{title}</header>
      <figure className={styles.artwork}>{artwork}</figure>
      {(body || tags || callToAction) ? (
        <footer className={styles.details}>
          {body ? <div className={styles.body}>{body}</div> : null}
          {tags ? <div className={styles.tags}>{tags}</div> : null}
          {callToAction ? <div className={styles.action}>{callToAction}</div> : null}
        </footer>
      ) : null}
    </article>
  );
}
