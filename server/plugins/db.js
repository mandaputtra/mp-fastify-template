const fp = require('fastify-plugin')
const mongoose = require('mongoose')

module.exports = fp( async (fastify, opts) => {
  const url = 'mongodb://localhost:27017/server_fv'

  // put your mongoose options here
  opts.useNewUrlParser = true

  const db = await mongoose.connect(url, opts)
  fastify.decorate('mongo', db)
})

