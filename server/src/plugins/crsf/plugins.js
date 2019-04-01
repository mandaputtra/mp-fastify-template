'use strict'

const Tokens = require('csrf')
const fp = require('fastify-plugin')

function plugin(fastify, options, next) {
  const opts = Object.assign({}, options || {})
  const tokens = new Tokens(opts)

  // Check csrf token
  function checkToken(secret, token) {
    const ignoreMethods = ['GET', 'OPTIONS', 'HEAD']
    if (ignoreMethods.includes(this.methods)) {
      return true
    }

    if (!tokens.verify(secret, token)) {
      throw new Error('Not Authorized!')
    }

    return true
  }

  // Generate csrf token
  function createTokens(scrt) {
    const token = tokens.create(scrt)
    return token
  }

  fastify.decorateReply('createTokenCSRF', createTokens)
  fastify.decorateRequest('checkTokenCSRF', checkToken)
  fastify.decorateRequest('generateSecretCSRF', tokens.secretSync())
  next()
}

module.exports = fp(plugin, {
  fastify: '>=2.0.0',
  name: 'fastify-crsf'
})
