'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:9233/life"',
  BASE_API: '"http://magic.soulfree.cn/life"',
  
  LIVE_URL:'"http://live.frp.soulfree.cn/"'
})
