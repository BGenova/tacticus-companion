import type { CSSProperties, ReactNode } from 'react';
import type { TagVariant } from '../../types';

/** Props du composant {@link Tag}. */
export interface TagProps {
  /** Variante visuelle du tag. */
  variant: TagVariant;
  /** Contenu du tag. */
  children: ReactNode;
  /** Styles supplémentaires. */
  style?: CSSProperties;
}

/**
 * Badge / étiquette utilisant les classes Nocturne `.tag-*`.
 *
 * @param props - {@link TagProps}
 */
export function Tag({ variant, children, style }: TagProps) {
  return (
    <span className={`tag ${variant}`} style={style}>
      {children}
    </span>
  );
}
