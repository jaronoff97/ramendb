/**
 * The one ownership rule the write routes share.
 *
 * Pass the owning row, or null when it does not exist. Returns the response to
 * send, or null when the caller may proceed. A missing row and a row owned by
 * somebody else answer differently on purpose: 404 hides nothing here, because
 * ids are cuids and the GET routes are public anyway.
 */
export function ownerGate(
  record: { userId: string } | null | undefined,
  userId: string,
  label: string,
): Response | null {
  if (!record) return new Response(`${label} not found`, { status: 404 })
  if (record.userId !== userId) return new Response('Forbidden', { status: 403 })
  return null
}
