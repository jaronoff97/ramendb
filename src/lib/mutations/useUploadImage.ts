import { useMutation, useQuery } from '@tanstack/react-query'
import { apiFetch } from '../api'

interface UploadSlot {
  uploadUrl: string
  publicUrl: string
  /** Signed into the URL, so we send these verbatim or GCS rejects the PUT. */
  headers: Record<string, string>
}

interface UploadStatus {
  enabled: boolean
  maxBytes: number
}

/** Whether this deployment has object storage wired up. */
export function useUploadStatus() {
  return useQuery({
    queryKey: ['uploads', 'status'],
    queryFn: () => apiFetch<UploadStatus>('/api/uploads'),
    staleTime: Infinity,
  })
}

/**
 * Uploads one image and returns the URL it can be read from.
 *
 * Two steps. The server signs a one-shot PUT, and the browser sends the bytes
 * straight to Cloud Storage. The file never passes through the app server, so
 * a large photo costs no request memory there.
 */
export function useUploadImage() {
  return useMutation({
    mutationKey: ['uploadImage'],
    mutationFn: async (file: File): Promise<string> => {
      const slot = await apiFetch<UploadSlot>('/api/uploads', {
        method: 'POST',
        body: JSON.stringify({ contentType: file.type, size: file.size }),
      })

      // Straight to object storage, and deliberately not through apiFetch:
      // this request must not carry our Authorization header to a third party.
      //
      // The headers come from the server because they are part of the
      // signature. One of them caps the body size, which is what stops a
      // caller from understating `size` above and then sending gigabytes.
      const response = await fetch(slot.uploadUrl, {
        method: 'PUT',
        body: file,
        headers: slot.headers,
      })

      if (!response.ok) {
        throw new Error(`Upload failed (${response.status})`)
      }

      return slot.publicUrl
    },
  })
}
