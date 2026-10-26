import styles from './r03-performer-slot.module.css';

export type R03PerformerSlotProps = {
  /** Consumer supplied image URL. The framework does not bundle performer artwork. */
  src: string;
  /** Meaningful description supplied with the consumer's chosen image. */
  alt: string;
  /** Optional decorative scene layer, kept separate from the performer image. */
  backdrop?: React.ReactNode;
};

/** Centers consumer-owned performer art above an independent decorative backdrop. */
export function R03PerformerSlot({ src, alt, backdrop }: R03PerformerSlotProps) {
  return (
    <figure className={styles.slot}>
      {backdrop ? <div className={styles.backdrop} aria-hidden="true">{backdrop}</div> : null}
      <img className={styles.performer} src={src} alt={alt} />
    </figure>
  );
}
