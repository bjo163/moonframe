import type { ReactNode } from 'react';
import styles from './r01-content-grid.module.css';

export type R01ContentGridProps = {
  creation: ReactNode;
  signal: ReactNode;
  operations: ReactNode;
  streams: ReactNode;
};

/** Responsive R01 dashboard composition; slot content remains consumer supplied. */
export function R01ContentGrid({ creation, signal, operations, streams }: R01ContentGridProps) {
  return (
    <div className={styles.dashboard}>
      <section className={styles.zone} aria-label="Creation">
        {creation}
      </section>
      <section className={styles.zone} aria-label="Signals">
        {signal}
      </section>
      <section className={styles.zone} aria-label="Operations">
        {operations}
      </section>
      <section className={styles.streams} aria-label="Activity streams">
        {streams}
      </section>
    </div>
  );
}
