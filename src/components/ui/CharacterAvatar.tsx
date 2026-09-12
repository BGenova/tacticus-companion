import { useState } from 'react';
import { getCharacterPortraitUrl } from '../../data/static/characters';

/** Props du composant {@link CharacterAvatar}. */
export interface CharacterAvatarProps {
  characterId: string;
  /** Repli affiché si aucun portrait n'est disponible (ou en échec de chargement). */
  initials: string;
  /** Taille (largeur = hauteur) en pixels. @default 52 */
  size?: number;
}

/**
 * Portrait d'un personnage, avec repli sur un avatar à initiales si le
 * personnage n'a pas de portrait vendorisé (voir 14_CHARACTER_PORTRAITS.md)
 * ou si l'image échoue à charger.
 */
export function CharacterAvatar({ characterId, initials, size = 52 }: CharacterAvatarProps) {
  const [failed, setFailed] = useState(false);
  const portraitUrl = getCharacterPortraitUrl(characterId);

  if (portraitUrl && !failed) {
    return (
      <img
        src={portraitUrl}
        alt=""
        onError={() => setFailed(true)}
        style={{
          width: size,
          height: size,
          flex: 'none',
          borderRadius: 'var(--radius-md)',
          objectFit: 'cover',
          background: 'var(--color-accent-900)',
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'var(--color-accent-900)',
        color: 'var(--color-accent-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize: Math.round(size * 0.29),
      }}
    >
      {initials}
    </div>
  );
}
