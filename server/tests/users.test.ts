import createServer from '../src/server'

const fastify = createServer()

afterAll(() => fastify.close(() => null))

test('should return JWT token and login success', async () => {
  try {
    const response = await fastify.inject({ method: 'GET', url: '/login' })
    expect(response.statusCode).toBe(200)
    const payload = JSON.parse(response.payload)
    expect(payload.status).toEqual(true)
  } catch (error) {
    expect(error).toBeFalsy()
  }
})


test('should fail on login', async () => {})


test('should success adding users to database', async () => {})

test('should fail adding users', async () => {})

test('should success updating users', async () => {})

test('should fail updating users', async () => {})

test('should succes delete users', async () => {})
