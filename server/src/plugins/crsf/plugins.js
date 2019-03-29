'use strict'

const Tokens = require('csrf')
const fp = require('fastify-plugin')

const tokens = new Tokens()

// Generate csrf token
function createTokens(scrt) {
  const token = tokens.create(scrt)
  return token
}

// Check csrf token
function checkToken(secret, token) {
  const ignoreMethods = ['GET', 'OPTIONS', 'HEAD']
  if (ignoreMethods.includes(this.methods)) {
    return false
  }

  if (!tokens.verify(secret, token)) {
    return false
  }

  return true
}

function plugin(fastify, options, next) {
  fastify.decorateReply('createTokenCSRF', createTokens)
  fastify.decorateRequest('checkTokenCSRF', checkToken)
  fastify.decorateRequest('generateSecretCSRF', tokens.secretSync())
  next()
}

module.exports = fp(plugin, {
  fastify: '>=2.0.0',
  name: 'fastify-crsf'
})
