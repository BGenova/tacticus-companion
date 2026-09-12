/**
 * The Tacticus API rejects cross-origin browser requests (no
 * Access-Control-Allow-Origin header), so in dev we go through the Vite
 * proxy configured in vite.config.ts (`/tacticus-api` -> api.tacticusgame.com).
 * There is no equivalent in a production static build — this quick-import
 * feature is dev/test only, gated behind import.meta.env.DEV in the UI.
 * See Tacticus_Planner_Documentation_Base/12_TACTICUS_API.md.
 */
const TACTICUS_API_BASE = import.meta.env.DEV ? '/tacticus-api' : 'https://api.tacticusgame.com';

export class TacticusApiError extends Error {
  public readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'TacticusApiError';
    this.status = status;
  }
}

/**
 * Fetch the raw (unvalidated) player payload from the Tacticus API.
 * Throws TacticusApiError on network failure or a non-2xx response.
 */
export async function fetchTacticusPlayer(apiKey: string): Promise<unknown> {
  let response: Response;
  try {
    response = await fetch(`${TACTICUS_API_BASE}/api/v1/player`, {
      headers: { 'X-API-KEY': apiKey },
      // The API already caches server-side (see metaData.lastUpdatedOn in
      // normalize.ts) — don't let the browser add a second, opaque layer of
      // staleness on top of that.
      cache: 'no-store',
    });
  } catch {
    throw new TacticusApiError("Impossible de contacter l'API Tacticus (réseau indisponible).");
  }

  if (!response.ok) {
    if (response.status === 403) {
      throw new TacticusApiError('Clé API invalide ou refusée.', 403);
    }
    throw new TacticusApiError(`Erreur API Tacticus (HTTP ${response.status}).`, response.status);
  }

  return response.json();
}
