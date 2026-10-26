import React from 'react';
import styles from './r01-workflow-feed.module.css';

export type WorkflowFeedItem = {
  id: string;
  title: string;
  status: string;
  detail?: string;
  time?: string;
};

type WorkflowFeedProps = {
  title: string;
  items: WorkflowFeedItem[];
  className?: string;
};

/** A consumer-data-driven workflow feed; status remains readable without color. */
export function WorkflowFeed({ title, items, className }: WorkflowFeedProps) {
  return (
    <section className={[styles.feed, className].filter(Boolean).join(' ')} aria-label={title}>
      <h2 className={styles.heading}>{title}</h2>
      <ol className={styles.list}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.status}>
              <span className={styles.statusMark} aria-hidden="true" />
              <span>{item.status}</span>
            </span>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              {item.detail && <p>{item.detail}</p>}
            </div>
            {item.time && <time className={styles.time}>{item.time}</time>}
          </li>
        ))}
      </ol>
    </section>
  );
}
