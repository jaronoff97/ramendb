import L from 'leaflet'

/**
 * Map pins.
 *
 * Every pin used to be the default blue Leaflet marker, so a place with a
 * dozen five-star reviews looked exactly like an unknown OpenStreetMap entry.
 * A reviewed place now carries its score.
 */
export function ratedIcon(average: number | null) {
  const label = average == null ? '·' : average.toFixed(1)
  const tone =
    average == null
      ? 'background:#64748b'
      : average >= 4
        ? 'background:#15803d'
        : average >= 3
          ? 'background:#b45309'
          : 'background:#b91c1c'

  return L.divIcon({
    className: '',
    html: `<span style="${tone};color:#fff;font:600 12px/1 ui-sans-serif,system-ui;
      display:flex;align-items:center;justify-content:center;width:34px;height:34px;
      border-radius:9999px;box-shadow:0 2px 8px rgb(0 0 0 / .35);border:2px solid #fff;
      ">${label}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  })
}

/** An OpenStreetMap search hit that RamenDB has never seen. */
export function candidateIcon() {
  return L.divIcon({
    className: '',
    html: `<span style="display:block;width:16px;height:16px;border-radius:9999px;
      background:#fff;border:3px solid #0f172a;box-shadow:0 2px 6px rgb(0 0 0 / .3)"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  })
}
