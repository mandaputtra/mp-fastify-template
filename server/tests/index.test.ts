import createServer from '../src/server'

const fastify = createServer()

afterAll(() => fastify.close(() => null))

test('should return hello world', async () => {
  try {
    const response = await fastify.inject({ method: 'GET', url: '/' })
    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.payload)).toEqual({ hello: 'world' })
  } catch (error) {
    expect(error).toBeFalsy()
  }
})

test('should return false on favico.ico', async () => {
  try {
    const response = await fastify.inject({ method: 'GET', url: '/favicon.ico' })
    expect(JSON.parse(response.payload)).toEqual({ message: 'no favico (ﾉ≧ڡ≦)', status: false })
  } catch (error) {
    expect(error).toBeFalsy()
  }
})
