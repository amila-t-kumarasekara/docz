import { config, copy } from '@ak/docz-rollup'

export default config({
  input: './src/index.ts',
  plugins: [copy('templates', 'dist/templates')],
})
