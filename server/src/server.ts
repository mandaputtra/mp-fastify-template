import * as Fastify from 'fastify'
import { configureAuthPlugin, configureSwaggerPlugin } from './plugins'

export default function createServer(opts?: Fastify.ServerOptions) {
  const fastify = Fastify(opts)

  configureSwaggerPlugin(fastify)
  configureAuthPlugin(fastify)

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fastify.get('/', async (_request, _reply) => {
    return { hello: 'world' }
  })

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fastify.get('/favicon.ico', async (_request, reply) => {
    reply.code(404).send({ message: 'no favico (ﾉ≧ڡ≦)', status: false })
  })

  return fastify
}
