const { setArgs, parseConfig, getBaseConfig } = require('@ak/docz-core')
const yargs = require('yargs')

const getDoczConfig = opts => {
  const { argv } = setArgs(yargs)
  return getBaseConfig(argv, opts)
}

exports.parseConfig = async opts => parseConfig(getDoczConfig(opts))
exports.getDoczConfig = getDoczConfig
