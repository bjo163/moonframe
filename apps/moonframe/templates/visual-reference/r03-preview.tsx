'use client';

import { useState } from 'react';
import styles from './r03-preview.module.css';

export type R03PreviewProps = {
  /** Accessible description of the poster contents. */
  label?: string;
  children: React.ReactNode;
  minZoom?: number;
  maxZoom?: number;
};

/** Editor preview with bounded zoom controls kept outside the poster content. */
export function R03Preview({
  label = 'Poster editor preview',
  children,
  minZoom = 0.75,
  maxZoom = 1.5,
}: R03PreviewProps) {
  const [zoom, setZoom] = useState(1);
  const step = 0.25;
  const lower = Math.min(minZoom, maxZoom);
  const upper = Math.max(minZoom, maxZoom);
  const canZoomOut = zoom - step >= lower;
  const canZoomIn = zoom + step <= upper;

  return (
    <section className={styles.root} aria-label={label}>
      <div className={styles.viewport}>
        <div className={styles.poster} style={{ zoom }}>
          {children}
        </div>
      </div>
      <div className={styles.controls} role="group" aria-label="Poster zoom controls">
        <button type="button" onClick={() => setZoom((value) => Math.max(lower, value - step))} disabled={!canZoomOut}>
          Zoom out
        </button>
        <output aria-live="polite" aria-label="Zoom level">{Math.round(zoom * 100)}%</output>
        <button type="button" onClick={() => setZoom((value) => Math.min(upper, value + step))} disabled={!canZoomIn}>
          Zoom in
        </button>
        <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1}>
          Reset zoom
        </button>
      </div>
    </section>
  );
}
