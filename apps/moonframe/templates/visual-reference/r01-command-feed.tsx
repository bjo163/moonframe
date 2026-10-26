import React from 'react';
import styles from './r01-command-feed.module.css';

export type CommandFeedEntry = {
  id: string;
  command: string;
  status: string;
  timestamp: string;
  dateTime?: string;
};

type CommandFeedProps = {
  title: string;
  entries: CommandFeedEntry[];
  className?: string;
};

/** A consumer-data-driven command log with visible, non-color status labels. */
export function CommandFeed({ title, entries, className }: CommandFeedProps) {
  return (
    <section className={[styles.feed, className].filter(Boolean).join(' ')} aria-label={title}>
      <h2 className={styles.heading}>{title}</h2>
      <ol className={styles.entries}>
        {entries.map(entry => (
          <li className={styles.entry} key={entry.id}>
            <time className={styles.timestamp} dateTime={entry.dateTime} title={entry.timestamp}>
              {entry.timestamp}
            </time>
            <code className={styles.command} title={entry.command}>{entry.command}</code>
            <span className={styles.status}>{entry.status}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
