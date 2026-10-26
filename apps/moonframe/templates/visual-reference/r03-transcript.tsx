import type { ReactNode } from 'react';

export type R03TranscriptProps = {
  /** Short description of the visual composition, without repeating event details. */
  artworkDescription: ReactNode;
  title: ReactNode;
  details?: ReactNode;
};

/** Text equivalent to keep flattened poster exports understandable without their artwork. */
export function R03Transcript({ artworkDescription, title, details }: R03TranscriptProps) {
  return (
    <section aria-label="Poster text description">
      <h2>Poster description</h2>
      <p>{title}</p>
      <p>{artworkDescription}</p>
      {details ? <div>{details}</div> : null}
    </section>
  );
}
