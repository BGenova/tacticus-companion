/**
 * Écran « Settings » : import/export de données, synchronisation,
 * réinitialisation et aperçu des états d'interface (chargement, erreur, vide).
 */
export function SettingsScreen() {
  return (
    <div>
      <h1 style={{ marginBottom: 2 }}>Settings</h1>
      <p style={{ color: 'color-mix(in srgb, var(--color-text) 65%, transparent)', marginBottom: 'var(--space-6)' }}>
        Gestion des données et de la synchronisation.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        {/* Import / Export */}
        <div className="card elev-sm">
          <div className="card-kicker">Données locales</div>
          <div className="card-title" style={{ fontSize: 16 }}>Import / Export</div>
          <p className="card-body">Vos données de roster et de progression sont stockées sur cet appareil.</p>
          <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
            <button type="button" className="btn btn-secondary">Importer JSON</button>
            <button type="button" className="btn btn-primary">Exporter JSON</button>
          </div>
        </div>

        {/* Synchronisation */}
        <div className="card elev-sm">
          <div className="card-kicker">Synchronisation</div>
          <div className="card-title" style={{ fontSize: 16 }}>Emplacement des données</div>
          <div className="seg" role="radiogroup" style={{ marginTop: 'var(--space-1)' }}>
            <label className="seg-opt">
              <input type="radio" name="sync" defaultChecked />
              Local uniquement
            </label>
            <label className="seg-opt">
              <input type="radio" name="sync" />
              Cloud
            </label>
          </div>
          <p className="card-body" style={{ marginTop: 'var(--space-2)' }}>
            Aucune connexion externe active pour le moment.
          </p>
        </div>
      </div>

      {/* Zone sensible */}
      <div className="card elev-sm" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card-kicker">Zone sensible</div>
        <div className="card-title" style={{ fontSize: 16 }}>Réinitialiser toutes les données</div>
        <p className="card-body">Action irréversible : supprime le roster, les objectifs et l'historique de farm importés.</p>
        <button type="button" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>Réinitialiser</button>
      </div>

      {/* États d'interface */}
      <h3 style={{ marginBottom: 'var(--space-3)' }}>États d'interface</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'var(--space-4)' }}>
        <div className="card elev-sm">
          <div className="card-kicker">Chargement</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
            <div style={{ height: 10, borderRadius: 999, background: 'var(--color-neutral-800)', width: '80%' }} />
            <div style={{ height: 10, borderRadius: 999, background: 'var(--color-neutral-800)', width: '55%' }} />
            <div style={{ height: 10, borderRadius: 999, background: 'var(--color-neutral-800)', width: '65%' }} />
          </div>
        </div>
        <div className="card elev-sm">
          <div className="card-kicker">Erreur</div>
          <p className="card-body">Impossible de charger vos données locales.</p>
          <button type="button" className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>Réessayer</button>
        </div>
        <div className="card elev-sm">
          <div className="card-kicker">Vide</div>
          <p className="card-body">Aucun personnage importé pour l'instant.</p>
          <button type="button" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Importer un export JSON</button>
        </div>
      </div>
    </div>
  );
}
