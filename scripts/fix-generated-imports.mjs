// prisma-zod-generator emits `import type { Prisma }` into files that never use
// it, which trips `noUnusedLocals`. Strip that import where it is dead so the
// repo typechecks. Run this after every `prisma generate`.
// ponytail: delete this script when the generator stops emitting the dead import.
import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'

const ROOT = new URL('../prisma/generated/', import.meta.url)
const IMPORT_LINE = /^import type \{ Prisma \} from '@prisma\/client';\r?\n/m

let fixed = 0

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const child = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir)
    if (entry.isDirectory()) {
      await walk(child)
      continue
    }
    if (!entry.name.endsWith('.ts')) continue

    const source = await readFile(child, 'utf8')
    if (!IMPORT_LINE.test(source)) continue
    // "Prisma" used anywhere other than on the import line means it is live.
    if (/\bPrisma\b/g.test(source.replace(IMPORT_LINE, ''))) continue

    await writeFile(child, source.replace(IMPORT_LINE, ''))
    fixed++
  }
}

// This also runs from `postinstall`, where the generated tree may not exist
// yet. Nothing to clean is not an error.
if (existsSync(ROOT)) {
  await walk(ROOT)
  console.log(`fix-generated-imports: cleaned ${fixed} file(s)`)
}
