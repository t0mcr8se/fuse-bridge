require('dotenv').config()
const baseConfig = require('./base.config')
const erc20Abi = require('../abis/ERC20.abi')

const id = `${baseConfig.id}-affirmation-request`

module.exports = {
  ...baseConfig.bridgeConfig,
  ...baseConfig.foreignConfig,
  event: 'Transfer',
  eventAbi: erc20Abi,
  queue: 'home',
  name: `watcher-${id}`,
  id
}
