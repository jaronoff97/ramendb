import { getAuth } from './workos/server-functions'

export async function apiFetch<T = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  const { accessToken } = await getAuth()
  // Spread `init` first. The other way round, a caller that passes any headers
  // at all replaces the whole object and drops the Authorization header.
  const res = await fetch(input, {
    credentials: 'same-origin',
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...(init?.headers || {}),
    },
  })

  if (!res.ok) {
    const text = await res.text()
    let parsed
    try {
      parsed = JSON.parse(text)
    } catch {}
    const message = parsed?.message || text || res.statusText
    const err: any = new Error(message)
    err.status = res.status
    err.body = parsed
    throw err
  }

  // 204 No Content
  if (res.status === 204) return undefined as unknown as T
  return (await res.json()) as T
}
