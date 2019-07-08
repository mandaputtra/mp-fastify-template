import { FastifyInstance } from 'fastify'

export function configureUserRoute(fastify: FastifyInstance) {
  fastify.post('/login', async (request, reply) => {
    reply.code(200).send({ message: 'success', status: false })
  })
}