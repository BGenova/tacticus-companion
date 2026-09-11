import { useRef, useState } from 'react';
import { usePlayerStore } from '../../stores/player-store';
import { ImportValidationError } from '../../adapters/planner-import';

type ImportStatus =
  | { state: 'idle' }
  | { state: 'preview'; filename: string; characterCount: number; goalCount: number; raw: string }
  | { state: 'success'; filename: string; characterCount: number }
  | { state: 'error'; message: string };

/**
 * Écran « Settings » : import/export de données, synchronisation,
 * réinitialisation et aperçu des états d'interface (chargement, erreur, vide).
 */
export function SettingsScreen() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<ImportStatus>({ state: 'idle' });
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const store = usePlayerStore();
  const hasData = Object.keys(store.data.characters).length > 0;

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw);
      const characters = parsed.characters ? Object.keys(parsed.characters) : [];
      const goals = Array.isArray(parsed.goals) ? parsed.goals : [];

      setImportStatus({
        state: 'preview',
        filename: file.name,
        characterCount: characters.length,
        goalCount: goals.length,
        raw,
      });
    } catch {
      setImportStatus({ state: 'error', message: 'Fichier JSON invalide.' });
    }

    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleConfirmImport = () => {
    if (importStatus.state !== 'preview') return;

    try {
      store.importFromJson(importStatus.raw);
      setImportStatus({
        state: 'success',
        filename: importStatus.filename,
        characterCount: importStatus.characterCount,
      });
    } catch (err) {
      if (err instanceof ImportValidationError) {
        setImportStatus({ state: 'error', message: err.issues.join('\n') });
      } else {
        setImportStatus({ state: 'error', message: 'Erreur inattendue lors de l\'import.' });
      }
    }
  };

  const handleCancelImport = () => {
    setImportStatus({ state: 'idle' });
  };

  const handleExport = () => {
    const json = store.exportJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tacticus-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    store.reset();
    setShowResetConfirm(false);
    setImportStatus({ state: 'idle' });
  };

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

          {importStatus.state === 'idle' && (
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                style={{ display: 'none' }}
                onChange={handleFileSelect}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => fileInputRef.current?.click()}
              >
                Importer JSON
              </button>
              {hasData && (
                <button type="button" className="btn btn-primary" onClick={handleExport}>
                  Exporter JSON
                </button>
              )}
            </div>
          )}

          {importStatus.state === 'preview' && (
            <div style={{ marginTop: 'var(--space-2)' }}>
              <p className="card-body" style={{ marginBottom: 'var(--space-2)' }}>
                <strong>{importStatus.filename}</strong> — {importStatus.characterCount} personnage(s), {importStatus.goalCount} objectif(s)
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button type="button" className="btn btn-primary" onClick={handleConfirmImport}>
                  Confirmer l'import
                </button>
                <button type="button" className="btn btn-ghost" onClick={handleCancelImport}>
                  Annuler
                </button>
              </div>
            </div>
          )}

          {importStatus.state === 'success' && (
            <div style={{ marginTop: 'var(--space-2)' }}>
              <p className="card-body" style={{ color: 'var(--color-accent)' }}>
                ✅ Import réussi — {importStatus.characterCount} personnage(s) importé(s) depuis {importStatus.filename}
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setImportStatus({ state: 'idle' })}
                style={{ marginTop: 'var(--space-1)' }}
              >
                OK
              </button>
            </div>
          )}

          {importStatus.state === 'error' && (
            <div style={{ marginTop: 'var(--space-2)' }}>
              <p className="card-body" style={{ color: 'var(--color-error, #ef4444)' }}>
                ❌ Erreur : {importStatus.message}
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setImportStatus({ state: 'idle' })}
                style={{ marginTop: 'var(--space-1)' }}
              >
                Réessayer
              </button>
            </div>
          )}
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
        {!showResetConfirm ? (
          <button
            type="button"
            className="btn btn-secondary"
            style={{ alignSelf: 'flex-start' }}
            onClick={() => setShowResetConfirm(true)}
          >
            Réinitialiser
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-error, #ef4444)', fontSize: 14 }}>Confirmer la suppression ?</span>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Oui, supprimer
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setShowResetConfirm(false)}>
              Annuler
            </button>
          </div>
        )}
      </div>

      {/* Info données actuelles */}
      {hasData && (
        <div className="card elev-sm" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="card-kicker">Données actuelles</div>
          <div className="card-body">
            <p>{Object.keys(store.data.characters).length} personnage(s) · {store.data.goals.length} objectif(s) · {Object.keys(store.data.campaigns).length} campagne(s)</p>
            {store.data.profile.username && <p>Joueur : {store.data.profile.username}</p>}
            <p style={{ fontSize: 12, opacity: 0.6 }}>Dernière mise à jour : {new Date(store.data.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
