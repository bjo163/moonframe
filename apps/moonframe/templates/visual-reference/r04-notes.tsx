import type { ReactNode } from 'react';

export type R04NotesProps = {
  /** Consumer-authored note; kept separate from the sign-in controls. */
  children: ReactNode;
  /** Set only when the note is purely ornamental. */
  decorative?: boolean;
  className?: string;
};

/** Optional side note for a sign-in composition; it never replaces or wraps the form. */
export function R04Notes({ children, decorative = false, className }: R04NotesProps) {
  return (
    <aside
      className={className}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : 'Additional information'}
    >
      {children}
    </aside>
  );
}
