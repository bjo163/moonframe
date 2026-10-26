import type { ReactNode } from 'react';

export type R04AuthSeamProps = {
  /** Consumer-owned provider action. Without it, no sign-in control is rendered. */
  onProviderSignIn?: () => void | Promise<void>;
  /** Explicitly supplied provider label, such as "Continue with Example ID". */
  providerLabel?: string;
  /** Optional consumer-owned provider mark. */
  providerMark?: ReactNode;
  /** Optional truthful copy for a nonfunctional visual demo. */
  demoMessage?: string;
};

/** Optional provider seam; it never implies OAuth, identity, or authentication by itself. */
export function R04AuthSeam({
  onProviderSignIn,
  providerLabel,
  providerMark,
  demoMessage,
}: R04AuthSeamProps) {
  if (!onProviderSignIn) {
    return demoMessage ? <p>{demoMessage}</p> : null;
  }

  return (
    <button type="button" onClick={() => void onProviderSignIn()}>
      {providerMark}
      {providerLabel ?? 'Continue with your identity provider'}
    </button>
  );
}
