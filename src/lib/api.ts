import { getAuth } from "./workos/server-functions";

export async function apiFetch<T = any>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const { accessToken } = await getAuth();
  const res = await fetch(input, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...(init?.headers || {})
    },
    ...init,
  });

  if (!res.ok) {
    const text = await res.text();
    let parsed;
    try { parsed = JSON.parse(text); } catch { }
    const message = parsed?.message || text || res.statusText;
    const err: any = new Error(message);
    err.status = res.status;
    err.body = parsed;
    throw err;
  }

  // 204 No Content
  if (res.status === 204) return undefined as unknown as T;
  return (await res.json()) as T;
}
