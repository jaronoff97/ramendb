import { useMutation } from '@tanstack/react-query'
import { apiFetch } from '../api';

type PictureInput = { url: string; caption?: string; reviewId?: string }

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
