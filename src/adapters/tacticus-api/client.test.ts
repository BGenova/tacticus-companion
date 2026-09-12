import { describe, it, expect, vi, afterEach } from 'vitest';
import { TacticusApiError, fetchTacticusPlayer } from './client';

// Mocking global fetch is the one legitimate exception to the "no mocks"
// rule here: this is a real network boundary (the Tacticus API) that tests
// cannot hit directly.
afterEach(() => {
  vi.unstubAllGlobals();
});

function stubFetch(response: Partial<Response> & { json?: () => Promise<unknown> }) {
  const fetchMock = vi.fn().mockResolvedValue(response as Response);
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

describe('fetchTacticusPlayer', () => {
  it('should send the apiKey in the X-API-KEY header', async () => {
    const fetchMock = stubFetch({ ok: true, status: 200, json: async () => ({ player: {} }) });

    await fetchTacticusPlayer('my-api-key');

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/player'),
      expect.objectContaining({ headers: { 'X-API-KEY': 'my-api-key' } }),
    );
  });

  it('should bypass the browser HTTP cache (the API already caches server-side)', async () => {
    const fetchMock = stubFetch({ ok: true, status: 200, json: async () => ({ player: {} }) });

    await fetchTacticusPlayer('my-api-key');

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/api/v1/player'),
      expect.objectContaining({ cache: 'no-store' }),
    );
  });

  it('should return the parsed JSON body on success', async () => {
    stubFetch({ ok: true, status: 200, json: async () => ({ player: { details: { name: 'x' } } }) });

    const result = await fetchTacticusPlayer('my-api-key');
    expect(result).toEqual({ player: { details: { name: 'x' } } });
  });

  it('should throw TacticusApiError with status 403 for an invalid key', async () => {
    stubFetch({ ok: false, status: 403, json: async () => ({ type: 'FORBIDDEN' }) });

    await expect(fetchTacticusPlayer('bad-key')).rejects.toMatchObject({
      name: 'TacticusApiError',
      status: 403,
    });
  });

  it('should throw TacticusApiError for other non-ok statuses', async () => {
    stubFetch({ ok: false, status: 500, json: async () => ({ type: 'UNKNOWN_ERROR' }) });

    await expect(fetchTacticusPlayer('my-api-key')).rejects.toBeInstanceOf(TacticusApiError);
  });

  it('should throw TacticusApiError when the network request fails', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('Failed to fetch'));
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchTacticusPlayer('my-api-key')).rejects.toBeInstanceOf(TacticusApiError);
  });
});
