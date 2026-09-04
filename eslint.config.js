//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  {
    // Machine output. The generator owns the style, not us.
    ignores: [
      'prisma/generated/**',
      'src/routeTree.gen.ts',
      'dist/**',
      // Plain JS that the type-aware rules cannot parse, because it is not
      // part of the TypeScript program.
      'server.js',
      'eslint.config.js',
      'prettier.config.js',
    ],
  },
  ...tanstackConfig,
]
