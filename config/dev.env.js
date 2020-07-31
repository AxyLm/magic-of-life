'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://127.0.0.1:1092"',
  // BASE_API: '"http://192.168.1.24:9200/brokerweb"',
  // BASE_API: '"http://127.0.0.1:7090/proxycore"'
})
