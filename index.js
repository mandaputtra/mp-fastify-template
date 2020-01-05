// initialize env on all server code
require('dotenv').config()
// Start fastify
const fastify = require('./www')()

async function start () {
  try {
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
    fastify.log.info(
      `OSPS server running on port ${fastify.server.address().port}`
    )
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
