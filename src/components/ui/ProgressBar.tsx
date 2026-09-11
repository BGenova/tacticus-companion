import type { CSSProperties } from 'react';

/** Props du composant {@link ProgressBar}. */
export interface ProgressBarProps {
  /** Pourcentage de remplissage (0–100). */
  pct: number;
  /** Hauteur de la barre en pixels. @default 6 */
  height?: number;
  /** Styles supplémentaires sur le conteneur. */
  style?: CSSProperties;
}

/**
 * Barre de progression horizontale utilisant les tokens Nocturne.
 *
 * @param props - {@link ProgressBarProps}
 */
export function ProgressBar({ pct, height = 6, style }: ProgressBarProps) {
  return (
    <div
      style={{
        height,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--color-neutral-900)',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(100, Math.max(0, pct))}%`,
          background: 'var(--color-accent)',
          borderRadius: 'var(--radius-sm)',
        }}
      />
    </div>
  );
}
