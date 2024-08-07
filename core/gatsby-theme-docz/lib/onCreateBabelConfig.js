const { Plugin, parseConfig } = require('@ak/docz-core')

module.exports = async (params, opts = {}) => {
  const config = await parseConfig(opts)
  const run = Plugin.runPluginsMethod(config.plugins)

  const { paths } = config
  const { actions, stage } = params

  actions.setBabelPlugin({
    name: '@ak/babel-plugin-export-metadata',
    options: {
      root: paths.getRootDir(config),
    },
  })

  run('onCreateBabelConfig', params, stage === 'develop')
}
