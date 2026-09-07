// Loads a page in a headless browser and fails if the console reports errors.
// The map only breaks in a browser, so typecheck and build cannot catch it.
import { chromium } from 'playwright-core'

const url = process.argv[2] ?? 'http://localhost:3000/'
const waitMs = Number(process.argv[3] ?? 12000)
const executablePath =
  process.env.CHROME_PATH ??
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`

const browser = await chromium.launch({
  executablePath,
  args: ['--enable-unsafe-swiftshader'],
})
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })

const errors = []
const warnings = []
const readArgs = async (m) => {
  // console.error("%o", err) gives a useless text(). Resolve the arguments.
  const parts = await Promise.all(
    m
      .args()
      .map((a) =>
        a
          .evaluate((v) =>
            v instanceof Error
              ? (v.stack ?? v.message)
              : typeof v === 'object'
                ? JSON.stringify(v)?.slice(0, 400)
                : String(v),
          )
          .catch(() => ''),
      ),
  )
  return parts.filter(Boolean).join(' ') || m.text()
}
const pending = []
page.on('console', (m) => {
  const t = m.type()
  if (t === 'error') pending.push(readArgs(m).then((s) => errors.push(s)))
  else if (t === 'warning')
    pending.push(readArgs(m).then((s) => warnings.push(s)))
})
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
page.on('requestfailed', (r) =>
  errors.push(`[request failed] ${r.url()} ${r.failure()?.errorText ?? ''}`),
)

await page.goto(url, { waitUntil: 'load', timeout: 30000 })
await page.waitForTimeout(waitMs)
await Promise.all(pending)

// Did the map actually paint? MapLibre draws into a canvas inside the leaflet pane.
const probe = await page.evaluate(() => ({
  canvas: !!document.querySelector('.leaflet-container canvas'),
  container: !!document.querySelector('.leaflet-container'),
  skeleton: !!document.querySelector('[aria-label="Loading the map"]'),
  errorBoundary: document.body.innerText.includes('Something went wrong'),
  attribution: (
    document.querySelector('.leaflet-control-attribution')?.textContent ?? ''
  ).slice(0, 60),
}))

console.log('DOM:', JSON.stringify(probe, null, 2))
console.log(`\nconsole errors: ${errors.length}`)
for (const e of [...new Set(errors)].slice(0, 12))
  console.log('  ✗ ' + e.split('\n').slice(0, 6).join('\n     ').slice(0, 700))
if (warnings.length) {
  console.log(`console warnings: ${warnings.length}`)
  for (const w of [...new Set(warnings)].slice(0, 8))
    console.log(
      '  ! ' + w.split('\n').slice(0, 10).join('\n     ').slice(0, 900),
    )
}

if (process.env.SHOT) {
  await page.screenshot({ path: process.env.SHOT })
  console.log('screenshot: ' + process.env.SHOT)
}

await browser.close()
const ok = errors.length === 0 && probe.canvas && !probe.errorBoundary
console.log(ok ? '\nPASS: map rendered, console clean' : '\nFAIL')
process.exit(ok ? 0 : 1)
