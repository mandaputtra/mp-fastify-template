import * as Fastify from 'fastify'
import { configureAuthPlugin, configureSwaggerPlugin } from './plugins'
import * as Knex from 'knex'
import KnexConfig from '../knexfile'
import { Model } from 'objection'

export default function createServer(opts?: Fastify.ServerOptions) {
  const fastify = Fastify(opts)

  configureSwaggerPlugin(fastify)
  configureAuthPlugin(fastify)

  // database setup
  const knex = Knex(KnexConfig.development)
  Model.knex(knex)

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fastify.get('/', async (_request, _reply) => {
    return { message: 'VF-CMS server is up!', success: true }
  })

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  fastify.get('/favicon.ico', async (_request, reply) => {
    reply.code(404).send({ message: 'no favico (ﾉ≧ڡ≦)', status: false })
  })

  return fastify
}
