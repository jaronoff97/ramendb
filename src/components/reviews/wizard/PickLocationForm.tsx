import { useEffect, useState } from 'react'
import { useSetAtom } from 'jotai'
import { useWizard } from './useWizard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { locationIdAtom } from '@/data/atoms/review-wizard-atoms'
import { useSearchLocations } from '@/lib/queries/useSearchLocation'

export function PickLocationForm() {
  const { goNext } = useWizard()
  const setLocation = useSetAtom(locationIdAtom)

  const [searchTerm, setSearchTerm] = useState('')
  const [debounced, setDebounced] = useState('')

  // debounce search for DB hits
  useEffect(() => {
    const t = setTimeout(() => setDebounced(searchTerm), 300)
    return () => clearTimeout(t)
  }, [searchTerm])

  const { data: results, isLoading } = useSearchLocations(debounced)
  const hasResults = results && results.length > 0

  return (
    <div className="space-y-4">
      {/* SEARCH FIELD */}
      <div>
        <label>Search Location</label>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type the location name…"
        />
      </div>

      {/* LOADING */}
      {isLoading && <div>Searching…</div>}

      {/* RESULTS */}
      {hasResults && (
        <div className="space-y-2 border p-3 rounded">
          <p className="font-semibold">Existing Locations</p>

          {results.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setLocation(loc.id)
                goNext(true)
              }}
              className="w-full text-left p-2 border rounded hover:bg-muted"
            >
              {loc.name} — {loc.city}, {loc.country}
            </button>
          ))}
        </div>
      )}

      {/* NO RESULTS → OFFER TO CREATE */}
      {!hasResults && debounced.length > 0 && !isLoading && (
        <div className="border p-3 rounded space-y-3">
          <p>No existing location found.</p>

          <Button
            variant="default"
            onClick={() => {
              goNext(false)
            }}
          >
            Create a new location
          </Button>
        </div>
      )}
    </div>
  )
}
