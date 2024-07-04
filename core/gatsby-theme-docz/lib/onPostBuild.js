const { Plugin, parseConfig } = require('@ak/docz-core')

module.exports = async (params, opts = {}) => {
  const config = await parseConfig(opts)
  Plugin.runPluginsMethod(config.plugins)('onPreBuild')
}
