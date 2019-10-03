const app = require('../www')

describe('test root / response', () => {
  const fastify = app()

  test('test hello world response from server', async () => {
    try {
      const res = await fastify.inject({ method: 'GET', url: '/' })
      expect(JSON.parse(res.payload)).toStrictEqual({ hello: 'world' })
    } catch (error) {
      expect(error).toBe(null)
    }
  })
})
