import { describe, expect, it } from 'vitest'
import * as z from 'zod'
import { TagCreateManyInputObjectSchema } from 'prisma/generated/schemas'
import { ownerGate } from '@/lib/authz'
import {
  listQuerySchema,
  ratingCreateSchema,
  reviewCreateSchema,
  reviewPicturesPayloadSchema,
  slugify,
} from '@/lib/types'
import { bboxFromCenter, escapeOverpassRegex } from '@/hooks/useOverpass'
import {
  REVIEW_STEPS,
  getStepNav,
  stepOrder,
} from '@/components/reviews/wizard/steps'

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

describe('escapeOverpassRegex', () => {
  it('neutralises an attempt to close the quoted regex', () => {
    const escaped = escapeOverpassRegex('a"]["amenity"="cafe')
    expect(escaped).not.toMatch(/(^|[^\\])"/)
    expect(escaped).not.toMatch(/(^|[^\\])\]/)
  })

  it('neutralises a slow pattern', () => {
    expect(escapeOverpassRegex('(a+)+$')).toBe('\\(a\\+\\)\\+\\$')
  })

  it('leaves an ordinary name alone', () => {
    expect(escapeOverpassRegex('Ramen Ya')).toBe('Ramen Ya')
  })
})

describe('bboxFromCenter', () => {
  it('returns south, west, north, east in that order', () => {
    const [s, w, n, e] = bboxFromCenter(40.7, -74, 2000).split(',').map(Number)
    expect(s).toBeLessThan(n)
    expect(w).toBeLessThan(e)
  })

  it('spans roughly twice the requested distance', () => {
    const [s, , n] = bboxFromCenter(40.7, -74, 2000).split(',').map(Number)
    const metresPerDegree = 111_320
    expect((n - s) * metresPerDegree).toBeCloseTo(4000, -2)
  })
})

describe('wizard steps', () => {
  it('skips the create-location step when a location already exists', () => {
    expect(getStepNav(REVIEW_STEPS.pick).next(true)).toBe(REVIEW_STEPS.review)
    expect(getStepNav(REVIEW_STEPS.pick).next(false)).toBe(
      REVIEW_STEPS.location,
    )
  })

  it('stops at both ends instead of running off the array', () => {
    expect(getStepNav(stepOrder[0]).prev()).toBe(stepOrder[0])
    expect(getStepNav(REVIEW_STEPS.success).next()).toBe(REVIEW_STEPS.success)
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
    const forged = { locationId, title: 't', userId: 'someone-else' }
    const parsed = reviewCreateSchema.parse(forged)
    expect(parsed).not.toHaveProperty('userId')
  })

  it('a rating body has no way to name a user', () => {
    const forged = { locationId, value: 5, userId: 'someone-else' }
    const parsed = ratingCreateSchema.parse(forged)
    expect(parsed).not.toHaveProperty('userId')
  })

  it('holds a rating to 0..5 whole numbers', () => {
    expect(ratingCreateSchema.safeParse({ locationId, value: 6 }).success).toBe(
      false,
    )
    expect(
      ratingCreateSchema.safeParse({ locationId, value: 2.5 }).success,
    ).toBe(false)
    expect(ratingCreateSchema.safeParse({ locationId, value: 5 }).success).toBe(
      true,
    )
  })
})
