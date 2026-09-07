import { describe, expect, it } from 'vitest'
import * as z from 'zod'
import { TagCreateManyInputObjectSchema } from 'prisma/generated/schemas'
import { ownerGate } from '@/lib/authz'
import {
  listQuerySchema,
  reviewCreateSchema,
  reviewPicturesPayloadSchema,
  slugify,
} from '@/lib/types'
import { bboxAround } from '@/hooks/usePlaceSearch'
import { toHalf } from '@/components/ui/stars'

describe('ownerGate', () => {
  it('lets the owner through', () => {
    expect(ownerGate({ userId: 'u1' }, 'u1', 'Review')).toBeNull()
  })

  it('refuses a signed-in stranger with 403', () => {
    expect(ownerGate({ userId: 'u1' }, 'u2', 'Review')?.status).toBe(403)
  })

  it('reports a missing row as 404, not as permission granted', () => {
    expect(ownerGate(null, 'u1', 'Review')?.status).toBe(404)
    expect(ownerGate(undefined, 'u1', 'Review')?.status).toBe(404)
  })
})

describe('bboxAround', () => {
  it('returns west, south, east, north, the order photon expects', () => {
    const [w, s, e, n] = bboxAround(40.7, -74, 2000).split(',').map(Number)
    expect(w).toBeLessThan(e)
    expect(s).toBeLessThan(n)
  })

  it('spans roughly twice the requested distance', () => {
    const [, s, , n] = bboxAround(40.7, -74, 2000).split(',').map(Number)
    expect((n - s) * 111_320).toBeCloseTo(4000, -2)
  })
})

// These pin the client payload to the schema its route parses. They are the
// cheap half of the contract; route authorisation still needs a database.
describe('request payloads match their route schema', () => {
  it('POST /api/tags accepts the batch the client sends', () => {
    const routeSchema = z.array(TagCreateManyInputObjectSchema).min(1)
    expect(
      routeSchema.safeParse([{ name: 'tonkotsu' }, { name: 'shoyu' }]).success,
    ).toBe(true)
    expect(routeSchema.safeParse([]).success).toBe(false)
  })

  it('POST /api/review-pictures accepts the batch the client sends', () => {
    const payload = {
      pictures: [
        {
          reviewId: 'cl9ebqhxk00003b600tymydho',
          url: 'https://example.com/a.png',
        },
      ],
    }
    expect(reviewPicturesPayloadSchema.safeParse(payload).success).toBe(true)
  })

  it('POST /api/review-pictures refuses a picture with no review', () => {
    const payload = { pictures: [{ url: 'https://example.com/a.png' }] }
    expect(reviewPicturesPayloadSchema.safeParse(payload).success).toBe(false)
  })
})

describe('slugify', () => {
  it('makes a url-safe slug', () => {
    expect(slugify('Ramen Ya')).toBe('ramen-ya')
    expect(slugify('Ippudo  NY!')).toBe('ippudo-ny')
  })

  it('folds accents rather than dropping the letter', () => {
    expect(slugify('Café Kitsuné')).toBe('cafe-kitsune')
  })

  it('returns empty for a name with nothing slug-worthy in it', () => {
    // The caller substitutes a default, so this must not throw.
    expect(slugify('。。。')).toBe('')
  })

  it('caps the length', () => {
    expect(slugify('a'.repeat(200)).length).toBe(60)
  })
})

describe('listQuerySchema', () => {
  it('defaults to a page, not the whole table', () => {
    expect(listQuerySchema.parse({}).take).toBe(25)
  })

  it('refuses a caller that asks for everything', () => {
    expect(listQuerySchema.safeParse({ take: '100000' }).success).toBe(false)
    expect(listQuerySchema.safeParse({ take: '0' }).success).toBe(false)
  })

  it('reads take from a query string, which is always text', () => {
    expect(listQuerySchema.parse({ take: '10' }).take).toBe(10)
  })
})

describe('create bodies carry no author', () => {
  const locationId = 'cl9ebqhxk00003b600tymydho'

  it('a review body has no way to name a user', () => {
    const forged = { locationId, title: 't', value: 4, userId: 'someone-else' }
    const parsed = reviewCreateSchema.parse(forged)
    expect(parsed).not.toHaveProperty('userId')
  })

  it('takes half stars and refuses anything finer', () => {
    const base = { locationId, title: 't' }
    const ok = (value: number) =>
      reviewCreateSchema.safeParse({ ...base, value }).success

    // Every half step the check constraint on Rating.value allows.
    for (const value of [0.5, 1, 1.5, 2.5, 4.5, 5]) {
      expect(ok(value)).toBe(true)
    }
    // Finer than a half, out of range, or nothing picked at all.
    for (const value of [0, 0.25, 3.7, 5.5, 6, -1]) {
      expect(ok(value)).toBe(false)
    }
  })

  it('a review carries its rating and photos in one request', () => {
    // The wizard used to send three. Abandoning halfway left a scoreless row.
    const parsed = reviewCreateSchema.safeParse({
      locationId,
      title: 'Great tonkotsu',
      text: 'Rich broth.',
      value: 5,
      pictures: ['https://example.com/a.jpg'],
    })
    expect(parsed.success).toBe(true)
  })

  it('refuses more photos than a review should carry', () => {
    const many = Array.from({ length: 9 }, (_, i) => `https://x.test/${i}.jpg`)
    const parsed = reviewCreateSchema.safeParse({
      locationId,
      title: 't',
      value: 3,
      pictures: many,
    })
    expect(parsed.success).toBe(false)
  })
})

describe('toHalf', () => {
  it('snaps an average to the half star we can draw', () => {
    expect(toHalf(4.4)).toBe(4.5)
    expect(toHalf(4.2)).toBe(4)
    expect(toHalf(3.75)).toBe(4)
    expect(toHalf(3.5)).toBe(3.5)
  })

  it('leaves an exact half alone', () => {
    for (const value of [0.5, 2.5, 5]) expect(toHalf(value)).toBe(value)
  })
})

describe('upload rules', () => {
  it('accepts only image types we can name a file extension for', async () => {
    const { isAllowedImageType } = await import('@/lib/uploads')
    for (const t of ['image/jpeg', 'image/png', 'image/webp', 'image/avif']) {
      expect(isAllowedImageType(t)).toBe(true)
    }
    // svg carries script, so it is not an image we will host.
    for (const t of ['image/svg+xml', 'text/html', 'application/pdf', '']) {
      expect(isAllowedImageType(t)).toBe(false)
    }
  })

  it('puts every object under the uploader, with a name they did not choose', async () => {
    const { objectNameFor } = await import('@/lib/uploads')
    const a = objectNameFor('user_1', 'image/jpeg')
    const b = objectNameFor('user_1', 'image/jpeg')
    expect(a).toMatch(/^reviews\/user_1\/[0-9a-f-]{36}\.jpg$/)
    // Two uploads never collide, so nobody overwrites anybody.
    expect(a).not.toBe(b)
  })

  it('names the file after the declared type, not the caller', async () => {
    const { objectNameFor } = await import('@/lib/uploads')
    expect(objectNameFor('u', 'image/webp').endsWith('.webp')).toBe(true)
    expect(objectNameFor('u', 'image/png').endsWith('.png')).toBe(true)
  })

  it('takes any image url when no bucket is configured', async () => {
    const { isOwnedImageUrl } = await import('@/lib/uploads')
    // Local runs have no GCS_BUCKET, and the form falls back to a URL field.
    expect(isOwnedImageUrl('https://example.com/a.jpg')).toBe(true)
  })
})
