/** Props du composant {@link StatCard}. */
export interface StatCardProps {
  /** Libellé affiché en kicker. */
  label: string;
  /** Valeur principale affichée. */
  value: string;
}

/**
 * Carte compacte affichant une statistique unique (ex. Attaque, Vie…).
 *
 * @param props - {@link StatCardProps}
 */
export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="card elev-sm">
      <div className="card-kicker">{label}</div>
      <div className="card-title" style={{ fontSize: 20 }}>
        {value}
      </div>
    </div>
  );
}
