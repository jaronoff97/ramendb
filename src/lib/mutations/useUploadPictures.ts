import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api';
import type { z } from 'zod'
import type { reviewPictureSchema } from '@/lib/types'

type PictureInput = z.infer<typeof reviewPictureSchema>

export function useUploadPictures() {
  return useMutation({
    mutationKey: ['uploadPictures'],
    mutationFn: (pictures: Array<PictureInput>) =>
      apiFetch('/api/review-pictures', {
        method: 'POST',
        body: JSON.stringify({ pictures }),
      }),
  })
}
