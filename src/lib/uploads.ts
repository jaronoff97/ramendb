import { Storage } from '@google-cloud/storage'
import { lazy } from '@/lib/workos/ssr/utils'

/**
 * Review photos, in Google Cloud Storage.
 *
 * The app already runs on Cloud Run in this project, so the bucket sits in
 * the same project and region as the service.
 *
 * There is no key file and no static credential anywhere. On Cloud Run the
 * library picks up the service account through the metadata server, and it
 * signs URLs through the IAM credentials API because it holds no private key
 * of its own. That needs one role, which terraform grants: the service
 * account is `roles/iam.serviceAccountTokenCreator` on itself.
 *
 * Locally that does not work from `gcloud auth application-default login`,
 * because a user credential has no service account to sign as. Point
 * GOOGLE_APPLICATION_CREDENTIALS at a key file, or impersonate the service
 * account, or simply leave GCS_BUCKET unset and use the URL field.
 *
 * The browser never touches a credential. It asks this server for a presigned
 * PUT, and that route sits behind `authMiddleware`, so an anonymous visitor
 * cannot obtain one.
 */
export interface UploadConfig {
  bucket: string
  publicBaseUrl: string
}

/** Every image we accept, and the file extension each one writes. */
const ALLOWED_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/gif': 'gif',
}

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024

/** How long the browser has to use a presigned PUT. */
const PRESIGN_TTL_MS = 2 * 60 * 1000

export function readUploadConfig(): UploadConfig | null {
  const bucket = process.env.GCS_BUCKET

  // Uploads are optional. Without a bucket the review form asks for an image
  // URL instead, so a local run with no GCP credentials is not a broken one.
  if (!bucket) return null

  return {
    bucket,
    publicBaseUrl:
      process.env.GCS_PUBLIC_BASE_URL ??
      `https://storage.googleapis.com/${bucket}`,
  }
}

// One client per instance. It resolves credentials once, which matters on a
// cold start.
const storage = lazy(() => new Storage())

export function isAllowedImageType(contentType: string) {
  return contentType in ALLOWED_TYPES
}

/** Signing failed, which is a deployment problem rather than a caller error. */
export class SigningUnavailableError extends Error {}

/** Where an image for this user lands. Never anything the browser sent. */
export function objectNameFor(userId: string, contentType: string) {
  return `reviews/${userId}/${crypto.randomUUID()}.${ALLOWED_TYPES[contentType]}`
}

/**
 * A one-shot upload slot for one image.
 *
 * The object name comes from here, never from the browser, so nobody chooses
 * where their bytes land or overwrites somebody else's photo.
 */
export async function createUploadSlot(userId: string, contentType: string) {
  const config = readUploadConfig()
  if (!config) return null

  const name = objectNameFor(userId, contentType)

  let uploadUrl: string
  try {
    ;[uploadUrl] = await signWrite(config.bucket, name, contentType)
  } catch (error) {
    // The usual cause is the service account missing
    // roles/iam.serviceAccountTokenCreator on itself, so say so once rather
    // than let a 500 reach the browser.
    throw new SigningUnavailableError(
      error instanceof Error ? error.message : 'Could not sign the upload URL',
    )
  }

  return {
    uploadUrl,
    publicUrl: `${config.publicBaseUrl.replace(/\/$/, '')}/${name}`,
  }
}

function signWrite(bucket: string, name: string, contentType: string) {
  return storage()
    .bucket(bucket)
    .file(name)
    .getSignedUrl({
      version: 'v4',
      action: 'write',
      expires: Date.now() + PRESIGN_TTL_MS,
      // Signed into the URL, so the browser cannot upload something else
      // under a name that claims to be a jpeg.
      contentType,
    })
}

/**
 * True when this URL is an image we host.
 *
 * Once a bucket is configured, a review may only carry pictures from it.
 * Otherwise the upload path would be decoration and anyone could still paste
 * a link to any image anywhere.
 */
export function isOwnedImageUrl(url: string) {
  const config = readUploadConfig()
  if (!config) return true
  return url.startsWith(`${config.publicBaseUrl.replace(/\/$/, '')}/`)
}
