import type { ReactNode } from 'react';
import styles from './r01-action-tiles.module.css';

export type R01ActionTile = {
  id: string;
  title: string;
  value: string;
  icon?: ReactNode;
  detail?: string;
};

type R01ActionTilesProps = {
  tiles: R01ActionTile[];
  label?: string;
};

/** Compact dashboard metrics; labels and values stay as readable DOM text. */
export function R01ActionTiles({ tiles, label = 'Key metrics' }: R01ActionTilesProps) {
  return (
    <section className={styles.section} aria-label={label}>
      <ul className={styles.grid}>
        {tiles.map((tile) => (
          <li className={styles.tile} key={tile.id}>
            <div className={styles.heading}>
              {tile.icon ? <span className={styles.icon} aria-hidden="true">{tile.icon}</span> : null}
              <h3 className={styles.title}>{tile.title}</h3>
            </div>
            <p className={styles.value}>{tile.value}</p>
            {tile.detail ? <p className={styles.detail}>{tile.detail}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
