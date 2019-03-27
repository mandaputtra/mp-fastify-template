const fastifyPlugin = require('fastify-plugin')

async function jwtDecode(fastify) {
  fastify.decorate('jwtDecode', async request => {
    try {
      const decodedToken = await request.jwt.decode(request.headers.authorization)
      return decodedToken
    } catch (error) {
      return error
    }
  })
}

module.exports = fastifyPlugin(jwtDecode)
