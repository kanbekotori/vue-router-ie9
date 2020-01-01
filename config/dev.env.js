'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HTTP_TIMEOUT: '15000',
  UPLOAD_TIMEOUT: '3600000'
})
