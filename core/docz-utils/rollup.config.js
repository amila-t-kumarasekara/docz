import { config } from '@ak/docz-rollup'

export default config({
  input: [
    './src/ast.ts',
    './src/format.ts',
    './src/fs.ts',
    './src/index.ts',
    './src/imports.ts',
    './src/jsx.ts',
    './src/mdast.ts',
    './src/exports.ts',
  ],
  output: {
    dir: 'lib',
  },
})
